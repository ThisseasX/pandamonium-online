import { useState } from 'react';
import Box from '@mui/material/Box';
import { Die } from 'components';
import { playRollSound } from 'utils';
import styles from './styles';

const Board = () => {
  const [side, setSide] = useState(4);

  const handleClick = () => {
    setSide((side) => (side + 1) % 6);
    playRollSound();
  };

  return (
    <Box sx={styles.root}>
      <Die side={side} onClick={handleClick} />
    </Box>
  );
};

export default Board;
