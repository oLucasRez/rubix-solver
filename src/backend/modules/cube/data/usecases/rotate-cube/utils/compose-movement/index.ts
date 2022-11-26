// --------------------------------------------------------------------< models
import {
  CubieAxes,
  Movement,
  Orientation,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export function composeMovement(
  axis: CubieAxes,
  orientation: Orientation | 2
): Movement {
  const map: Record<CubieAxes, Record<Orientation | 2, Movement>> = {
    left: { cw: 'L', acw: 'L`', 2: 'L2' },
    right: { cw: 'R', acw: 'R`', 2: 'R2' },
    up: { cw: 'U', acw: 'U`', 2: 'U2' },
    down: { cw: 'D', acw: 'D`', 2: 'D2' },
    front: { cw: 'F', acw: 'F`', 2: 'F2' },
    back: { cw: 'B', acw: 'B`', 2: 'B2' },
  };

  return map[axis][orientation];
}
