// --------------------------------------------------------------------< models
import {
  Orientation,
  XCubieAxes,
  YCubieAxes,
  ZCubieAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export type FlowMold =
  | {
      middle: {
        [Y in YCubieAxes]: {
          [Z in ZCubieAxes]: {
            [W in Y]: Record<Orientation, [XCubieAxes, Y, 'middle']>;
          } & {
            [W in Z]: Record<Orientation, [XCubieAxes, 'middle', Z]>;
          };
        };
      };
    }
  | {
      [X in XCubieAxes]: {
        middle: {
          [Z in ZCubieAxes]: {
            [W in X]: Record<Orientation, [X, YCubieAxes, 'middle']>;
          } & {
            [W in Z]: Record<Orientation, ['middle', YCubieAxes, Z]>;
          };
        };
      };
    }
  | {
      [X in XCubieAxes]: {
        [Y in YCubieAxes]: {
          middle: {
            [W in X]: Record<Orientation, [X, 'middle', ZCubieAxes]>;
          } & {
            [W in Y]: Record<Orientation, ['middle', Y, ZCubieAxes]>;
          };
        };
      };
    };
