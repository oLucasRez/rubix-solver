// --------------------------------------------------------------------< models
import {
  CubieAxes,
  XCubieAxes,
  YCubieAxes,
  ZCubieAxes,
  Orientation,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type XFlow = Record<
  YCubieAxes | ZCubieAxes,
  Record<Orientation, CubieAxes>
>;
export type YFlow = Record<
  XCubieAxes | ZCubieAxes,
  Record<Orientation, CubieAxes>
>;
export type ZFlow = Record<
  XCubieAxes | YCubieAxes,
  Record<Orientation, CubieAxes>
>;
