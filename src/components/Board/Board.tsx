import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Die } from 'components';
import { playRollSound } from 'utils';
import { map, random, range } from 'lodash/fp';
import styles from './styles';

const Board = () => {
  const [dice, setDice] = useState(range(0, 6));

  const handleClick = () => {
    playRollSound();
    setDice(map(() => random(0, 5)));
  };

  return (
    <Box sx={styles.root}>
      <Box sx={styles.dice}>
        {dice.map((side, i) => (
          <Die key={i} side={side} />
        ))}
      </Box>

      <Button
        sx={styles.button}
        size="large"
        variant="contained"
        onClick={handleClick}
      >
        Roll
      </Button>
    </Box>
  );
};

export default Board;
