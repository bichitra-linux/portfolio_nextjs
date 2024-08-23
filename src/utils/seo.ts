// utils/seo.ts
export function generateKeywords(content: string): string {
    // Example: Extract keywords from content
    const keywords = content
      .split(/\s+/)
      .map(word => word.toLowerCase())
      .filter((word, index, self) => self.indexOf(word) === index && word.length > 3)
      .join(", ");
    return keywords;
  }