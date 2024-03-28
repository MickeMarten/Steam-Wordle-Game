import randomWordSelector from '../utils/RandomWordSelector.js';

async function gameModehandler(playerMode) {
  const mockWords = [
    'ab',
    'cd',
    'ef',
    'gh',
    'ij',
    'kl',
    'mn',
    'op',
    'qr',
    'st',
    'apple',
    'banana',
    'orange',
    'grape',
    'melon',
    'peach',
    'kiwi',
    'carrot',
    'potato',
    'tomato',
    'onion',
    'happy',
    'sad',
    'angry',
    'excited',
    'calm',
    'brave',
    'strong',
    'smart',
    'kind',
    'qwertyuia',
    'qqertyuia',
    'poiuytrdfg',
    'mnbvcdfghy',
    'poijhbgvfr',
  ];

  const randomWord = randomWordSelector(
    mockWords,
    playerMode.letterQuantity,
    playerMode.includeDouble
  );
  return randomWord;
}

export default gameModehandler;
