export function formatTime(time: number) {
  const minutes = Math.floor(time/60);
  const remainingSeconds = time % 60;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0')

  return `${formattedMinutes}:${formattedSeconds}`;
} 