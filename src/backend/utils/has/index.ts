// ---------------------------------------------------------------------< types
import { equals } from 'backend/utils';
// ============================================================================
export function has<Type>(array: Type[], value: Type) {
  return array.some((_value) => equals(value, _value));
}
