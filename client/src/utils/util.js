const localeString = (number) => {
  return number.toLocaleString();
};

const formatToTimer = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export { localeString, formatToTimer };
