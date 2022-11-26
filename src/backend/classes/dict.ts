// ---------------------------------------------------------------------< utils
import { stringfy } from 'backend/utils';
// ============================================================================
export class Dict<KeyType, ValueType> {
  private map: Map<string, ValueType>;

  constructor() {
    this.map = new Map<string, ValueType>();
  }

  get<DefaultType>(key: KeyType, defaultValue: DefaultType) {
    const value = this.map.get(stringfy(key));

    if (value === undefined) return defaultValue;

    return value;
  }

  set(key: KeyType, value: ValueType) {
    this.map.set(stringfy(key), value);
  }
}
