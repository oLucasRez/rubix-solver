// --------------------------------------------------------------------< models
import {
  Cube,
  Cubie,
  XCubeAxes,
  YCubeAxes,
  ZCubeAxes,
} from 'backend/modules/cube/domain/models';
// -------------------------------------------------------------------< helpers
import { mapCube } from 'backend/modules/cube/data/helpers';
// ---------------------------------------------------------------------< utils
import { copy } from 'backend/utils';
// ============================================================================
function newCube(): Cube {
  const x: XCubeAxes[] = ['left', 'middle', 'right'];
  const y: YCubeAxes[] = ['up', 'middle', 'down'];
  const z: ZCubeAxes[] = ['front', 'middle', 'back'];

  const emptyCubie: Cubie = {
    up: null,
    down: null,
    front: null,
    back: null,
    left: null,
    right: null,
  };

  const cube: any = {};

  x.forEach((i) =>
    y.forEach((j) =>
      z.forEach((k) => {
        if (!cube[i]) cube[i] = {};
        if (!cube[i][j]) cube[i][j] = {};
        if (!cube[i][j][k]) cube[i][j][k] = copy(emptyCubie);
      })
    )
  );

  return cube;
}
// ----------------------------------------------------------------------------
function colorfyCube(cube: Cube) {
  mapCube(cube, 'up', (cubie) => (cubie.up = 'white'));
  mapCube(cube, 'down', (cubie) => (cubie.down = 'yellow'));
  mapCube(cube, 'right', (cubie) => (cubie.right = 'red'));
  mapCube(cube, 'left', (cubie) => (cubie.left = 'orange'));
  mapCube(cube, 'front', (cubie) => (cubie.front = 'green'));
  mapCube(cube, 'back', (cubie) => (cubie.back = 'blue'));
}
// ----------------------------------------------------------------------------
export function makeCube() {
  const cube = newCube();

  colorfyCube(cube);

  return cube;
}
