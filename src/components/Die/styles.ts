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
  },
  face: {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    backgroundColor: '#f4f1f2',
    boxShadow: '0 0 8px 0px rgba(0, 0, 0, 0.32)',
    width: '100px',
    height: '100px',
    padding: '8px',
    borderRadius: '24px',
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
};
