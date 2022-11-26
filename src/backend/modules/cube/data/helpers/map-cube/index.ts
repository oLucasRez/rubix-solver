// --------------------------------------------------------------------< models
import {
  Cube,
  Cubie,
  CubieAxes,
  XCubeAxes,
  YCubeAxes,
  ZCubeAxes,
} from 'backend/modules/cube/domain/models';
// ============================================================================
export function mapCube<ReturnType>(
  cube: Cube,
  axis: CubieAxes | 'all' | 'middle x' | 'middle y' | 'middle z',
  callback: (
    cubie: Cubie,
    address: [XCubeAxes, YCubeAxes, ZCubeAxes],
    index: string
  ) => ReturnType
) {
  const x: XCubeAxes[] = ['left', 'middle', 'right'];
  const y: YCubeAxes[] = ['up', 'middle', 'down'];
  const z: ZCubeAxes[] = ['front', 'middle', 'back'];

  const _return: ReturnType[] = [];

  x.forEach((i) =>
    y.forEach((j) =>
      z.forEach((k) => {
        ([i, j, k, 'all'].includes(axis) ||
          (i === 'middle' && axis === 'middle x') ||
          (j === 'middle' && axis === 'middle y') ||
          (k === 'middle' && axis === 'middle z')) &&
          _return.push(callback(cube[i][j][k], [i, j, k], i + j + k));
      })
    )
  );

  return _return;
}
