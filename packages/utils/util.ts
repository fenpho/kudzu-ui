export const xxx = (src: string): string => {
  return new URL(src, import.meta.url).href
}