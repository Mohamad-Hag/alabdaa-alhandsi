export default function firstCharToUpper(string: string): string {
  if (string.length < 1) return string;
  let firstChar = string[0].toUpperCase();
  let length = string.length;
  string = firstChar + string.slice(1, length);
  return string;
}
