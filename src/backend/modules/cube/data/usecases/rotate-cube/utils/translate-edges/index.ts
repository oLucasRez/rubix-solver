// --------------------------------------------------------------------< models
import {
  CubieAxes,
  Orientation,
  XCubeAxes,
  YCubeAxes,
  ZCubeAxes,
  Cube,
} from 'backend/modules/cube/domain/models';
// ---------------------------------------------------------------------< utils
import { copy } from 'backend/utils';
// -----------------------------------------------------------------< constants
import { edgesFlow } from 'backend/modules/cube/data/constants';
// ---------------------------------------------------------------------< types
import { Flow } from './types';
// ============================================================================
export function translateEdges(
  cube: Cube,
  axis: CubieAxes,
  orientation: Orientation
) {
  const cubeCopy = copy(cube);

  const x: XCubeAxes[] = ['left', 'middle', 'right'];
  const y: YCubeAxes[] = ['up', 'middle', 'down'];
  const z: ZCubeAxes[] = ['front', 'middle', 'back'];

  const flow: Flow = edgesFlow;

  x.forEach((prevX) => {
    y.forEach((prevY) => {
      z.forEach((prevZ) => {
        const next = flow[prevX]?.[prevY]?.[prevZ]?.[axis]?.[orientation];

        if (next) {
          const [nextX, nextY, nextZ] = next;

          cube[nextX][nextY][nextZ] = cubeCopy[prevX][prevY][prevZ];
        }
      });
    });
  });
}
