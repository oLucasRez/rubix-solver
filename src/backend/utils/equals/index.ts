// ---------------------------------------------------------------------< utils
import { stringfy } from 'backend/utils';
// ============================================================================
export function equals<Type>(...values: Type[]) {
  return !values.some((value) => stringfy(value) !== stringfy(values[0]));
}
