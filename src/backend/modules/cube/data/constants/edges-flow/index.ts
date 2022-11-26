// ---------------------------------------------------------------------< types
import { FlowMold } from './types';
// ============================================================================
// flow.prevX.prevY.prevZ.axis.orientation = [nextX, nextY, nextZ]
export const edgesFlow: FlowMold = {
  left: {
    up: {
      middle: {
        // left up middle
        left: {
          cw: ['left', 'middle', 'front'],
          acw: ['left', 'middle', 'back'],
        },
        up: {
          cw: ['middle', 'up', 'back'],
          acw: ['middle', 'up', 'front'],
        },
      },
    },
    middle: {
      front: {
        // left middle front
        left: {
          cw: ['left', 'down', 'middle'],
          acw: ['left', 'up', 'middle'],
        },
        front: {
          cw: ['middle', 'up', 'front'],
          acw: ['middle', 'down', 'front'],
        },
      },
      back: {
        // left middle back
        left: {
          cw: ['left', 'up', 'middle'],
          acw: ['left', 'down', 'middle'],
        },
        back: {
          cw: ['middle', 'down', 'back'],
          acw: ['middle', 'up', 'back'],
        },
      },
    },
    down: {
      middle: {
        // left down middle
        left: {
          cw: ['left', 'middle', 'back'],
          acw: ['left', 'middle', 'front'],
        },
        down: {
          cw: ['middle', 'down', 'front'],
          acw: ['middle', 'down', 'back'],
        },
      },
    },
  },
  middle: {
    up: {
      front: {
        // middle up front
        up: {
          cw: ['left', 'up', 'middle'],
          acw: ['right', 'up', 'middle'],
        },
        front: {
          cw: ['right', 'middle', 'front'],
          acw: ['left', 'middle', 'front'],
        },
      },
      back: {
        // middle up back
        up: {
          cw: ['right', 'up', 'middle'],
          acw: ['left', 'up', 'middle'],
        },
        back: {
          cw: ['left', 'middle', 'back'],
          acw: ['right', 'middle', 'back'],
        },
      },
    },
    down: {
      front: {
        // middle down front
        down: {
          cw: ['right', 'down', 'middle'],
          acw: ['left', 'down', 'middle'],
        },
        front: {
          cw: ['left', 'middle', 'front'],
          acw: ['right', 'middle', 'front'],
        },
      },
      back: {
        // middle down back
        down: {
          cw: ['left', 'down', 'middle'],
          acw: ['right', 'down', 'middle'],
        },
        back: {
          cw: ['right', 'middle', 'back'],
          acw: ['left', 'middle', 'back'],
        },
      },
    },
  },
  right: {
    up: {
      middle: {
        // right up middle
        right: {
          cw: ['right', 'middle', 'back'],
          acw: ['right', 'middle', 'front'],
        },
        up: {
          cw: ['middle', 'up', 'front'],
          acw: ['middle', 'up', 'back'],
        },
      },
    },
    middle: {
      front: {
        // right middle front
        right: {
          cw: ['right', 'up', 'middle'],
          acw: ['right', 'down', 'middle'],
        },
        front: {
          cw: ['middle', 'down', 'front'],
          acw: ['middle', 'up', 'front'],
        },
      },
      back: {
        // right middle back
        right: {
          cw: ['right', 'down', 'middle'],
          acw: ['right', 'up', 'middle'],
        },
        back: {
          cw: ['middle', 'up', 'back'],
          acw: ['middle', 'down', 'back'],
        },
      },
    },
    down: {
      middle: {
        // right down middle
        right: {
          cw: ['right', 'middle', 'front'],
          acw: ['right', 'middle', 'back'],
        },
        down: {
          cw: ['middle', 'down', 'back'],
          acw: ['middle', 'down', 'front'],
        },
      },
    },
  },
};
