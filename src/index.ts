import { rotateCube, shuffleCube } from 'backend/modules/cube/data/usecases';
import {
  Colors,
  Cube,
  CubieAxes,
  XCubeAxes,
  YCubeAxes,
  ZCubeAxes,
} from 'backend/modules/cube/domain/models';
import { makeCube } from 'backend/modules/cube/main/factories';

const cube = makeCube();

const x_cube: XCubeAxes[] = ['left', 'middle', 'right'];
const y_cube: YCubeAxes[] = ['up', 'middle', 'down'];
const z_cube: ZCubeAxes[] = ['front', 'middle', 'back'];

const root = document.getElementById('root');

const getX = (macro: CubieAxes) =>
  (({ left: -1, right: 1, back: 2 }[macro] ?? 0) * 60);
const getY = (macro: CubieAxes) => (({ up: -1, down: 1 }[macro] ?? 0) * 60);

x_cube.forEach((i) =>
  y_cube.forEach((j) =>
    z_cube.forEach((k) => {
      const [iID] = i;
      const [jID] = j;
      const [kID] = k;

      if (cube[i][j][k].up) {
        const div = document.createElement('div');

        div.id = iID + jID + kID + '_up';

        const left = i === 'left' ? 0 : i === 'middle' ? 20 : 40;
        const top = k === 'back' ? 0 : k === 'middle' ? 20 : 40;

        const x = getX('up') + left;
        const y = getY('up') + top;

        div.style.transform = `translate(${x}px,${y}px)`;

        if (i === 'middle' && k === 'middle') div.append('U');

        root?.appendChild(div);
      }

      if (cube[i][j][k].front) {
        const div = document.createElement('div');

        div.id = iID + jID + kID + '_front';

        const left = i === 'left' ? 0 : i === 'middle' ? 20 : 40;
        const top = j === 'up' ? 0 : j === 'middle' ? 20 : 40;

        const x = getX('front') + left;
        const y = getY('front') + top;

        div.style.transform = `translate(${x}px,${y}px)`;

        if (i === 'middle' && j === 'middle') div.append('F');

        root?.appendChild(div);
      }

      if (cube[i][j][k].left) {
        const div = document.createElement('div');

        div.id = iID + jID + kID + '_left';

        const left = k === 'back' ? 0 : k === 'middle' ? 20 : 40;
        const top = j === 'up' ? 0 : j === 'middle' ? 20 : 40;

        const x = getX('left') + left;
        const y = getY('left') + top;

        div.style.transform = `translate(${x}px,${y}px)`;

        if (k === 'middle' && j === 'middle') div.append('L');

        root?.appendChild(div);
      }

      if (cube[i][j][k].right) {
        const div = document.createElement('div');
        if (!div) return;

        root?.appendChild(div);
        div.id = iID + jID + kID + '_right';

        const left = k === 'front' ? 0 : k === 'middle' ? 20 : 40;
        const top = j === 'up' ? 0 : j === 'middle' ? 20 : 40;

        const x = getX('right') + left;
        const y = getY('right') + top;

        div.style.transform = `translate(${x}px,${y}px)`;

        if (k === 'middle' && j === 'middle') div.append('R');
      }

      if (cube[i][j][k].down) {
        const div = document.createElement('div');
        if (!div) return;

        root?.appendChild(div);
        div.id = iID + jID + kID + '_down';

        const left = i === 'left' ? 0 : i === 'middle' ? 20 : 40;
        const top = k === 'front' ? 0 : k === 'middle' ? 20 : 40;

        const x = getX('down') + left;
        const y = getY('down') + top;

        div.style.transform = `translate(${x}px,${y}px)`;

        if (i === 'middle' && k === 'middle') div.append('D');
      }

      if (cube[i][j][k].back) {
        const div = document.createElement('div');
        if (!div) return;

        root?.appendChild(div);
        div.id = iID + jID + kID + '_back';

        const left = i === 'right' ? 0 : i === 'middle' ? 20 : 40;
        const top = j === 'up' ? 0 : j === 'middle' ? 20 : 40;

        const x = getX('back') + left;
        const y = getY('back') + top;

        div.style.transform = `translate(${x}px,${y}px)`;

        if (i === 'middle' && j === 'middle') div.append('B');
      }
    })
  )
);

const cubieAxes: CubieAxes[] = ['left', 'right', 'up', 'down', 'front', 'back'];

cubieAxes.forEach((cubieAxis) => {
  const border = document.createElement('div');
  border.classList.add('border');

  border.style.transform = `translate(${getX(cubieAxis)}px,${getY(
    cubieAxis
  )}px)`;

  root?.appendChild(border);
});

const colors: Record<Colors, string> = {
  blue: '#39C1DB',
  green: '#60E433',
  white: '#EFE8EB',
  orange: '#FF6414',
  red: '#FE1934',
  yellow: '#F3F905',
};

function printCube(_cube: Cube) {
  x_cube.forEach((i) =>
    y_cube.forEach((j) =>
      z_cube.forEach((k) => {
        const [iID] = i;
        const [jID] = j;
        const [kID] = k;

        const up = _cube[i][j][k].up;
        if (up) {
          const div = document.getElementById(iID + jID + kID + '_up');
          if (!div) return;

          div.style.background = colors[up];
        }

        const front = _cube[i][j][k].front;
        if (front) {
          const div = document.getElementById(iID + jID + kID + '_front');
          if (!div) return;

          div.style.background = colors[front];
        }

        const left = _cube[i][j][k].left;
        if (left) {
          const div = document.getElementById(iID + jID + kID + '_left');
          if (!div) return;

          div.style.background = colors[left];
        }

        const right = _cube[i][j][k].right;
        if (right) {
          const div = document.getElementById(iID + jID + kID + '_right');
          if (!div) return;

          div.style.background = colors[right];
        }

        const down = _cube[i][j][k].down;
        if (down) {
          const div = document.getElementById(iID + jID + kID + '_down');
          if (!div) return;

          div.style.background = colors[down];
        }

        const back = _cube[i][j][k].back;
        if (back) {
          const div = document.getElementById(iID + jID + kID + '_back');
          if (!div) return;

          div.style.background = colors[back];
        }
      })
    )
  );
}

printCube(cube);

shuffleCube(cube, 21, async (_cube, mov) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(mov);

      printCube(_cube);

      resolve();
    }, 1000);
  });
});
