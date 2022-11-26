// --------------------------------------------------------------------< models
import {
  CubieAxes,
  Orientation,
  XCubieAxes,
  YCubieAxes,
  ZCubieAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type Flow = {
  [X in XCubieAxes]: {
    [Y in YCubieAxes]: {
      [Z in ZCubieAxes]: {
        [W in CubieAxes]?: Record<
          Orientation,
          [XCubieAxes, YCubieAxes, ZCubieAxes]
        >;
      };
    };
  };
};
