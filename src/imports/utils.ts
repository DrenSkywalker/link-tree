const getRandomizeColor = (colors: string[]) => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default getRandomizeColor;
