// utils/seo.ts
const stopWords = new Set([
  "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "he", "in", "is", "it", "its", "of", "on", "that", "the", "to", "was", "were", "will", "with"
]);

export function generateKeywords(content: string): string {
  // Example: Extract keywords from content
  const keywords = content
    .split(/\s+/)
    .map(word => word.toLowerCase().replace(/[^a-z0-9]/g, '').trim())
    .filter(word => word.length > 3 && !stopWords.has(word))
    .reduce((uniqueWords, word) => uniqueWords.add(word), new Set<string>());
  
  return Array.from(keywords).join(", ");
}