export function toPropValue<T>(propKey: string, prop?: T) {
  if (prop === undefined) return undefined;
  const result = [];

  result.push(`
    ${propKey} : ${prop}
  `)

  return result;
}