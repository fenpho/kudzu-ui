export const getImageUrl = (src: string): string => {
  return new URL(src, import.meta.url).href
}