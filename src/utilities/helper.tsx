export function extractLastWord(headline :string) {
  const words = headline.split(' ');
  if (words.length <= 1) return { remaining: headline, lastWord: headline };

  const lastWord = words.pop();
  const remaining = words.join(' ');

  return { remaining, lastWord };
}
