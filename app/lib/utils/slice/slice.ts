export function uniqueSlice(slice: string[]): string[] {
  const uniqueSlice: string[] = [];
  const mapString = new Map<string, boolean>();
  for (const item of slice) {
    if (mapString.has(item)) {
      continue;
    }
    mapString.set(item, true);
    uniqueSlice.push(item);
  }
  return uniqueSlice;
}
