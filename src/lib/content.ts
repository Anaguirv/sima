import { getCollection } from 'astro:content';

export async function getServicesGrouped() {
  const all = await getCollection('services');
  const byCategory = all.reduce<Record<string, typeof all>>((acc, entry) => {
    const cat = entry.data.category || 'Otros';
    (acc[cat] ||= []).push(entry);
    return acc;
  }, {});

  Object.keys(byCategory).forEach((cat) => {
    byCategory[cat].sort((a, b) => {
      const ao = a.data.order ?? 9999;
      const bo = b.data.order ?? 9999;
      if (ao !== bo) return ao - bo;
      return a.data.title.localeCompare(b.data.title);
    });
  });

  const categories = Object.keys(byCategory).sort();
  return { categories, byCategory, all };
}
