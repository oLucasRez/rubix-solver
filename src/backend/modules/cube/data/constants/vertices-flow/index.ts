// ---------------------------------------------------------------------< types
import { FlowMold } from './types';
// ============================================================================
// flow.prevX.prevY.prevZ.axis.orientation = [nextX, nextY, nextZ]
export const verticesFlow: FlowMold = {
  left: {
    up: {
      front: {
        // left up front
        left: {
          cw: ['left', 'down', 'front'],
          acw: ['left', 'up', 'back'],
        },
        up: {
          cw: ['left', 'up', 'back'],
          acw: ['right', 'up', 'front'],
        },
        front: {
          cw: ['right', 'up', 'front'],
          acw: ['left', 'down', 'front'],
        },
      },
      back: {
        // left up back
        left: {
          cw: ['left', 'up', 'front'],
          acw: ['left', 'down', 'back'],
        },
        up: {
          cw: ['right', 'up', 'back'],
          acw: ['left', 'up', 'front'],
        },
        back: {
          cw: ['left', 'down', 'back'],
          acw: ['right', 'up', 'back'],
        },
      },
    },
    down: {
      front: {
        // left down front
        left: {
          cw: ['left', 'down', 'back'],
          acw: ['left', 'up', 'front'],
        },
        down: {
          cw: ['right', 'down', 'front'],
          acw: ['left', 'down', 'back'],
        },
        front: {
          cw: ['left', 'up', 'front'],
          acw: ['right', 'down', 'front'],
        },
      },
      back: {
        // left down back
        left: {
          cw: ['left', 'up', 'back'],
          acw: ['left', 'down', 'front'],
        },
        down: {
          cw: ['left', 'down', 'front'],
          acw: ['right', 'down', 'back'],
        },
        back: {
          cw: ['right', 'down', 'back'],
          acw: ['left', 'up', 'back'],
        },
      },
    },
  },
  right: {
    up: {
      front: {
        // right up front
        right: {
          cw: ['right', 'up', 'back'],
          acw: ['right', 'down', 'front'],
        },
        up: {
          cw: ['left', 'up', 'front'],
          acw: ['right', 'up', 'back'],
        },
        front: {
          cw: ['right', 'down', 'front'],
          acw: ['left', 'up', 'front'],
        },
      },
      back: {
        // right up back
        right: {
          cw: ['right', 'down', 'back'],
          acw: ['right', 'up', 'front'],
        },
        up: {
          cw: ['right', 'up', 'front'],
          acw: ['left', 'up', 'back'],
        },
        back: {
          cw: ['left', 'up', 'back'],
          acw: ['right', 'down', 'back'],
        },
      },
    },
    down: {
      front: {
        // right down front
        right: {
          cw: ['right', 'up', 'front'],
          acw: ['right', 'down', 'back'],
        },
        down: {
          cw: ['right', 'down', 'back'],
          acw: ['left', 'down', 'front'],
        },
        front: {
          cw: ['left', 'down', 'front'],
          acw: ['right', 'up', 'front'],
        },
      },
      back: {
        // right down back
        right: {
          cw: ['right', 'down', 'front'],
          acw: ['right', 'up', 'back'],
        },
        down: {
          cw: ['left', 'down', 'back'],
          acw: ['right', 'down', 'front'],
        },
        back: {
          cw: ['right', 'up', 'back'],
          acw: ['left', 'down', 'back'],
        },
      },
    },
  },
};
