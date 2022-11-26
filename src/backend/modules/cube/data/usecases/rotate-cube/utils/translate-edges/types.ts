// --------------------------------------------------------------------< models
import {
  CubeAxes,
  CubieAxes,
  Orientation,
  XCubeAxes,
  YCubeAxes,
  ZCubeAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type Flow = {
  [X in CubeAxes]?: {
    [Y in CubeAxes]?: {
      [Z in CubeAxes]?: {
        [W in CubieAxes]?: Record<
          Orientation,
          [XCubeAxes, YCubeAxes, ZCubeAxes]
        >;
      };
    };
  };
};
