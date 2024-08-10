import { Rotation } from '@types';
import { ROTATIONS } from './rotations';

export const getDieFace = (side: number) =>
  ({
    3: '/dice/bamboo-t.png',
    4: '/dice/drop-t.png',
    5: '/dice/panda-t.png',
  }[side] || '/dice/blank.svg');

export const formatRotation = (
  rotation: Rotation,
  negative = false,
  even = false,
) => {
  const sign = negative ? '-' : '';
  const offset = even ? 0 : 360;

  return `
    rotateX(${sign}${rotation.x + offset}deg)
    rotateY(${sign}${rotation.y + offset}deg)
  `;
};

export const getDieRotation = (side: number, even = false) =>
  ({
    0: `translateZ(-50px) ${formatRotation(ROTATIONS[0], true, even)}`,
    1: `translateZ(-50px) ${formatRotation(ROTATIONS[5], true, even)}`,
    2: `translateZ(-50px) ${formatRotation(ROTATIONS[3], true, even)}`,
    3: `translateZ(-50px) ${formatRotation(ROTATIONS[1], true, even)}`,
    4: `translateZ(-50px) ${formatRotation(ROTATIONS[4], true, even)}`,
    5: `translateZ(-50px) ${formatRotation(ROTATIONS[2], true, even)}`,
  }[side] || '');
