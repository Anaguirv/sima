import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    img: z.string().optional(),       // ruta desde /public
    category: z.string(),             // ← requerido para agrupar
    duration: z.number().optional(),
    price: z.number().optional(),
    keywords: z.array(z.string()).optional(),
    order: z.number().optional(),     // para controlar el orden dentro de la categoría
    featured: z.boolean().optional(), // marcar servicios destacados para portada
  }),
});

export const collections = { services };
