export function filter(resources, pattern) {
  // Replace '*' with a regular expression pattern that matches any sequence of characters
  const regexPattern = pattern
    .replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&")
    .replace(/\*/g, ".*");
  const regex = new RegExp(`^${regexPattern}$`);
  // Filter the strings that match the regular expression
  return resources.filter((str) => regex.test(str));
}
export function match(pattern, str) {
  // Replace '*' with a regular expression pattern that matches any sequence of characters
  const regexPattern = pattern
    .replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&")
    .replace(/\*/g, ".*");
  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(str);
}
