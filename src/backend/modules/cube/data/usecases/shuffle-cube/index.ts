// --------------------------------------------------------------------< models
import { Cube, Movement } from 'backend/modules/cube/domain/models';
// ------------------------------------------------------------------< usecases
import { rotateCube } from 'backend/modules/cube/data/usecases';
// ---------------------------------------------------------------------< types
import { MaybePromise } from 'backend/types';
// ============================================================================
function getAxis(movement: Movement | undefined) {
  if (!movement) return;

  const axis: string = movement
    .split('')
    .filter((char) => char !== `'` && char !== '2')[0];

  return axis;
}

export async function shuffleCube(
  cube: Cube,
  length: number,
  onShuffle?: (cube: Cube, mov: Movement) => MaybePromise<void>
) {
  const movs: Movement[] = [
    ...(['U', `U'`, 'U2'] as Movement[]),
    ...(['F', `F'`, 'F2'] as Movement[]),
    ...(['R', `R'`, 'R2'] as Movement[]),
    ...(['B', `B'`, 'B2'] as Movement[]),
    ...(['L', `L'`, 'L2'] as Movement[]),
    ...(['D', `D'`, 'D2'] as Movement[]),
  ];

  const shuffleArray: Movement[] = [];

  while (shuffleArray.length < length) {
    const i = Math.floor(Math.random() * movs.length);

    const mov = movs[i];
    const lastMov = shuffleArray[shuffleArray.length - 1];

    if (getAxis(mov) !== getAxis(lastMov)) shuffleArray.push(mov);
  }

  for (let i = 0; i < shuffleArray.length; i++) {
    const mov = shuffleArray[i];

    rotateCube(cube, mov);

    await onShuffle?.(cube, mov);
  }
}
