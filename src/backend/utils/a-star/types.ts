// ---------------------------------------------------------------------< types
import { MaybePromise } from 'backend/types';
// ============================================================================
export type Neighbors<NodeType> = (node: NodeType) => MaybePromise<NodeType[]>;

export type HeuristicCost<NodeType> = (
  current: NodeType,
  goal: NodeType
) => MaybePromise<number>;

export type EdgeWeight<NodeType> = (
  from: NodeType,
  to: NodeType
) => MaybePromise<number>;
