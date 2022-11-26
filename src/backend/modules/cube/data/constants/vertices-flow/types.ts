// --------------------------------------------------------------------< models
import {
  Orientation,
  XCubieAxes,
  YCubieAxes,
  ZCubieAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type FlowMold = {
  [X in XCubieAxes]: {
    [Y in YCubieAxes]: {
      [Z in ZCubieAxes]: {
        [W in X]: Record<Orientation, [X, YCubieAxes, ZCubieAxes]>;
      } & {
        [W in Y]: Record<Orientation, [XCubieAxes, Y, ZCubieAxes]>;
      } & {
        [W in Z]: Record<Orientation, [XCubieAxes, YCubieAxes, Z]>;
      };
    };
  };
};
