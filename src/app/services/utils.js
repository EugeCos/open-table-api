export const capitalizeFirstLetter = word => {
  const wordLowerCase = word.toLowerCase();
  if (wordLowerCase)
    return wordLowerCase[0].toUpperCase() + wordLowerCase.slice(1);
};
