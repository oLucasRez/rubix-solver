// -------------------------------------------------------------------< classes
import { Dict, Heap } from 'backend/classes';
// ---------------------------------------------------------------------< utils
import { equals, has } from 'backend/utils';
// --------------------------------------------------------------------< errors
import { TimeoutError, ImpossibleError } from 'backend/errors';
// -----------------------------------------------------------------< constants
import { infinity } from 'backend/constants';
// ---------------------------------------------------------------------< types
import { Neighbors, HeuristicCost, EdgeWeight } from './types';
// ============================================================================
function buildPath<NodeType>(
  cameFrom: Dict<NodeType, NodeType>,
  current: NodeType | null
): NodeType[] {
  if (!current) return [];

  const path = [current];

  let count = 0;
  while (current && cameFrom.get(current, null)) {
    if (count++ > 750) throw new Error('Timeout');

    current = cameFrom.get(current, null);

    current && path.unshift(current);
  }

  path.shift();

  return path.filter((value) => value !== null);
}

const defaultCost = () => 1;

/**
 * Algoritmo A*
 *
 * @param start - The initial node
 * @param goal - The node to reach
 * @param neighbors - Callback that receives a node and returns the neighbors of that node
 * @param heuristicCost - Callback that receives a node and the goal node and returns the heuristic cost of that node
 * @param edgeWeight - Callback that receives two nodes and returns the cost to go from one to the other
 *
 * @returns An array of all the steps from the start node to the goal node
 */

export async function aStar<NodeType>(
  start: NodeType,
  goal: NodeType,
  neighbors: Neighbors<NodeType>,
  heuristicCost: HeuristicCost<NodeType> = defaultCost,
  edgeWeight: EdgeWeight<NodeType> = defaultCost
): Promise<NodeType[]> {
  const cameFrom: Dict<NodeType, NodeType> = new Dict<NodeType, NodeType>();

  const startCost: Dict<NodeType, number> = new Dict<NodeType, number>();
  startCost.set(start, 0);

  const fullCost: Dict<NodeType, number> = new Dict<NodeType, number>();
  fullCost.set(start, await heuristicCost(start, goal));

  const frontier = new Heap<NodeType>(
    (me, over) => fullCost.get(me, infinity) < fullCost.get(over, infinity)
  );
  frontier.push(start);

  let count = 0;
  while (frontier.array.length) {
    if (count++ > 3000) throw new TimeoutError();

    const current = frontier.pop();

    if (!current) throw new ImpossibleError('Node impossible to reach!');

    if (equals(current, goal)) return buildPath(cameFrom, current);

    for (const neighbor of await neighbors(current)) {
      const neighborStartCost =
        startCost.get(current, infinity) +
        (await edgeWeight(current, neighbor));

      if (
        startCost.get(neighbor, infinity) === infinity ||
        neighborStartCost < startCost.get(neighbor, infinity)
      ) {
        cameFrom.set(neighbor, current);
        startCost.set(neighbor, neighborStartCost);
        fullCost.set(
          neighbor,
          neighborStartCost + (await heuristicCost(neighbor, goal))
        );

        !has(frontier.array, neighbor) && frontier.push(neighbor);
      }
    }
  }

  throw new ImpossibleError('Node impossible to reach!');
}
