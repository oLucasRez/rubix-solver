// ---------------------------------------------------------------------< utils
import { parse, stringfy } from 'backend/utils';
// ============================================================================
export function copy<Type>(original: Type) {
  return parse<Type>(stringfy(original));
}
