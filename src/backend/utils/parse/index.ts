// ============================================================================
export function parse<Type>(data: string) {
  return JSON.parse(data) as Type;
}
