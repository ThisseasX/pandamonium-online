import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { noop, range } from 'lodash/fp';
import { animate } from 'utils';
import { getDieFace, getDieRotation } from './utils';
import styles from './styles';

type Props = {
  side?: number;
  onClick?: () => void;
};

const Die = ({ side = 0, onClick = noop }: Props) => {
  const dieRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const evenRoll = useRef(false);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    animate(dieRef.current as HTMLElement, {
      transform: getDieRotation(side, evenRoll.current),
    });

    evenRoll.current = !evenRoll.current;
  });

  return (
    <Box onClick={onClick} sx={styles.root}>
      <Box
        ref={dieRef}
        sx={[styles.container, { transform: getDieRotation(side, true) }]}
      >
        {range(0, 6).map((i) => (
          <Box key={i} sx={styles.face} component="img" src={getDieFace(i)} />
        ))}
      </Box>
    </Box>
  );
};

export default Die;
