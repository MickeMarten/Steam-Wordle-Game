function WordRandomizer(wordsArray, length, doubleLetters) {
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
  console.log(selectableWords);

  if (selectableWords.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * selectableWords.length);
  const selectedWord = selectableWords[randomIndex];
  console.log(length, doubleLetters, selectedWord);
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
  console.log(fetchedWordList);
  return fetchedWordList;
}

getWordList();

async function gameModehandler(playerMode) {
  const wordList = await getWordList();

  const randomWord = WordRandomizer(
    wordList,
    playerMode.letterQuantity,
    playerMode.includeDouble
  );
  return randomWord;
}

export default gameModehandler;
