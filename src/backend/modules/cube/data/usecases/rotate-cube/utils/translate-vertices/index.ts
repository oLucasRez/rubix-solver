// --------------------------------------------------------------------< models
import {
  Cube,
  CubieAxes,
  Orientation,
  XCubieAxes,
  YCubieAxes,
  ZCubieAxes,
} from 'backend/modules/cube/domain/models';
// ---------------------------------------------------------------------< utils
import { copy } from 'backend/utils';
// -----------------------------------------------------------------< constants
import { verticesFlow } from 'backend/modules/cube/data/constants';
// ---------------------------------------------------------------------< types
import { Flow } from './types';
// ============================================================================
export function translateVertices(
  cube: Cube,
  axis: CubieAxes,
  orientation: Orientation
) {
  const cubeCopy = copy(cube);

  const x: XCubieAxes[] = ['left', 'right'];
  const y: YCubieAxes[] = ['up', 'down'];
  const z: ZCubieAxes[] = ['front', 'back'];

  const flow: Flow = verticesFlow;

  x.forEach((prevX) => {
    y.forEach((prevY) => {
      z.forEach((prevZ) => {
        const next = flow[prevX][prevY][prevZ][axis]?.[orientation];

        if (next) {
          const [nextX, nextY, nextZ] = next;

          cube[nextX][nextY][nextZ] = cubeCopy[prevX][prevY][prevZ];
        }
      });
    });
  });
}
