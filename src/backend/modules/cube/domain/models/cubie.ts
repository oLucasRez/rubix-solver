// --------------------------------------------------------------------< models
import { CubieAxes, Colors } from 'backend/modules/cube/domain/models';
// ============================================================================
export type Cubie = {
  [key in CubieAxes]: Colors | null;
};
