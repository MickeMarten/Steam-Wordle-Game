function wordRandomizer(wordsArray, length, doubleLetters) {
  const selectableWords = wordsArray.filter((word) => {
    if (word.length !== Number(length)) {
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
  console.log('rätt ord:', length, doubleLetters, selectedWord);
  return selectedWord;
}

async function getWordList() {
  const response = await fetch(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
  );
  const data = await response.json();

  const fetchedWordList = Object.keys(data).filter(
    (word) => word.length < 11 && word.length > 1
  );
  return fetchedWordList;
}

async function gameModehandler(playerMode) {
  const wordList = await getWordList();

  const randomWord = wordRandomizer(
    wordList,
    playerMode.letterQuantity,
    playerMode.includeDouble
  );
  return randomWord;
}

export default gameModehandler;
