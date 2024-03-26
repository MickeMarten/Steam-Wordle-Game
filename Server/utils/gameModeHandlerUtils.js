import randomWordSelector from '../utils/RandomWordSelector.js';
import { getPlayerMode } from '../routes/gameModehandler.js';

async function gameModehandler() {
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
    'qwertyuias',
    'qqertyuias',
  ];
  const playerMode = getPlayerMode();
  const letterQuantity = playerMode.map((item) => item.letterQuantity);
  const includeDoubleLetters = playerMode.map((item) => item.includeDouble);
  const randomWord = randomWordSelector(
    mockWords,
    letterQuantity,
    includeDoubleLetters
  );
  console.log(randomWord);
  return randomWord;
}

gameModehandler();
