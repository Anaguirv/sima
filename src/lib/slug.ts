export function toSlug(input: string): string {
  return String(input || '')
    .normalize('NFD')                      // separa tildes
    .replace(/[\u0300-\u036f]/g, '')      // quita diacríticos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')          // no alfanumérico = guion
    .replace(/(^-|-$)/g, '');             // sin guiones extremos
}
