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

async function gameModehandler(playerMode) {
  async function getWordList() {
    const response = await fetch(
      'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
    );
    const data = await response.json();

    const fetchedWordList = Object.keys(data).filter(
      (word) => word.length < 11
    );
    console.log(fetchedWordList);
    return fetchedWordList;
  }

  const wordList = await getWordList();

  const randomWord = WordRandomizer(
    wordList,
    playerMode.letterQuantity,
    playerMode.includeDouble
  );
  return randomWord;
}

export default gameModehandler;

// const mockWords = [
//   'ab',
//   'cd',
//   'ef',
//   'gh',
//   'ij',
//   'kl',
//   'mn',
//   'op',
//   'qr',
//   'st',
//   'apple',
//   'banana',
//   'orange',
//   'grape',
//   'melon',
//   'peach',
//   'kiwi',
//   'carrot',
//   'potato',
//   'tomato',
//   'onion',
//   'happy',
//   'sad',
//   'angry',
//   'excited',
//   'calm',
//   'brave',
//   'strong',
//   'smart',
//   'kind',
//   'qwertyuia',
//   'qqertyuia',
//   'poiuytrdfg',
//   'mnbvcdfghy',
//   'poijhbgvfr',
// ];
