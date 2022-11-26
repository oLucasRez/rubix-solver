// ============================================================================
export function stringfy<Type>(data: Type) {
  return typeof data === 'string' ? data : JSON.stringify(data);
}
