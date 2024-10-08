import { ROTATIONS } from './rotations';
import { formatRotation } from './utils';

export default {
  root: {
    cursor: 'pointer',
    width: '100px',
    height: '100px',
    perspective: '200px',
  },
  container: {
    width: '100px',
    height: '100px',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center',
    willChange: 'transform',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  face: {
    position: 'absolute',
    backgroundColor: '#f4f1f2',
    boxShadow: '0 0 4px 0px #eee, inset 0 0 10px #ddd',
    width: '100px',
    height: '100px',
    padding: '8px',
    borderRadius: '16px',
    '&:nth-of-type(1)': {
      transform: `${formatRotation(ROTATIONS[0])} translateZ(50px)`,
    },
    '&:nth-of-type(2)': {
      transform: `${formatRotation(ROTATIONS[5])} translateZ(50px)`,
    },
    '&:nth-of-type(3)': {
      transform: `${formatRotation(ROTATIONS[3])} translateZ(50px)`,
    },
    '&:nth-of-type(4)': {
      transform: `${formatRotation(ROTATIONS[1])} translateZ(50px)`,
    },
    '&:nth-of-type(5)': {
      transform: `${formatRotation(ROTATIONS[4])} translateZ(50px)`,
    },
    '&:nth-of-type(6)': {
      transform: `${formatRotation(ROTATIONS[2])} translateZ(50px)`,
    },
  },
  cover: {
    backgroundColor: '#ddd',
    boxShadow: 'none',
    '&:nth-of-type(1)': {
      transform: `${formatRotation(ROTATIONS[0])} translateZ(48px)`,
    },
    '&:nth-of-type(2)': {
      transform: `${formatRotation(ROTATIONS[5])} translateZ(48px)`,
    },
    '&:nth-of-type(3)': {
      transform: `${formatRotation(ROTATIONS[3])} translateZ(48px)`,
    },
    '&:nth-of-type(4)': {
      transform: `${formatRotation(ROTATIONS[1])} translateZ(48px)`,
    },
    '&:nth-of-type(5)': {
      transform: `${formatRotation(ROTATIONS[4])} translateZ(48px)`,
    },
    '&:nth-of-type(6)': {
      transform: `${formatRotation(ROTATIONS[2])} translateZ(48px)`,
    },
  },
  innerCover: {
    position: 'absolute',
    width: '95px',
    height: '95px',
    transformOrigin: 'center',
  },
  innerCoverX: {
    backgroundColor: '#ddd',
    transform: 'rotateX(90deg)',
  },
  innerCoverY: {
    backgroundColor: '#ddd',
    transform: 'rotateY(90deg)',
  },
  innerCoverZ: {
    backgroundColor: '#ddd',
    transform: 'rotateZ(90deg)',
  },
};
