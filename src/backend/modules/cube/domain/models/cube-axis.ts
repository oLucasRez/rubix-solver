// --------------------------------------------------------------------< models
import {
  XCubieAxes,
  YCubieAxes,
  ZCubieAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type XCubeAxes = XCubieAxes | 'middle';

export type YCubeAxes = YCubieAxes | 'middle';

export type ZCubeAxes = ZCubieAxes | 'middle';

export type CubeAxes = XCubeAxes | YCubeAxes | ZCubeAxes;
