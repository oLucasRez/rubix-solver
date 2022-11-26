// --------------------------------------------------------------------< models
import {
  Cubie,
  XCubeAxes,
  YCubeAxes,
  ZCubeAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type Cube = Record<
  XCubeAxes,
  Record<YCubeAxes, Record<ZCubeAxes, Cubie>>
>;
