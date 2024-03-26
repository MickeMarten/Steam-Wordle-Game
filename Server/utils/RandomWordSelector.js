function randomWordSelector(wordsArray, length, doubleLetters) {
  const selectableWords = wordsArray.filter((word) => {
    if (word.length < length) {
      return false;
    }

    if (!doubleLetters) {
      const uniqueChars = new Set(word);
      if (uniqueChars.size !== word.length) {
        return false;
      }
    }

    return true;
  });

  if (selectableWords.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * selectableWords.length);
  const selectedWord = selectableWords[randomIndex];

  return selectedWord;
}

export default randomWordSelector;
