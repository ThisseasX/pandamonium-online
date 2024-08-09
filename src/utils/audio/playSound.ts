export const playSound = (audio: string, startTime = 0) => {
  const mudSound = new Audio(audio);
  mudSound.currentTime = startTime;
  mudSound.play();
};
