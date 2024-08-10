export const playSound = (sound: string, startTime = 0) => {
  const audio = new Audio(sound);
  audio.currentTime = startTime;

  audio.play();
};
