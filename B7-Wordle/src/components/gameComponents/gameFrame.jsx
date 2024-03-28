import Button from './button';
import LetterQuantityDropdown from './droppDown';
import PlayerInput from './PlayerInput';
import Checkbox from './CheckBox';
import { evaluateGameInput } from '../../Algorithms/gameInputHandler';
import { useEffect, useState } from 'react';
function GameFrame() {
  const [gameInfo, setGameInfo] = useState('Choose gamemode');
  const [wordGuess, setWordGuess] = useState('');
  const [result, setResult] = useState([]);
  const [includeDouble, setIncludeDouble] = useState(false);
  const [letterQuantity, setLetterQuantity] = useState(2);
  const [correctWord, setcorrectWord] = useState('');
  console.log(result);

  async function postGameMode() {
    const loot = {
      letterQuantity: letterQuantity,
      includeDouble: includeDouble,
    };
    const response = await fetch('/api/gamemodehandler', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loot),
    });
    const data = await response.json();
    console.log(data);
    setcorrectWord(data.randomWord);
  }

  const guessWord = () => {
    const evaluatePlayerInput = evaluateGameInput(wordGuess, correctWord);
    setResult(evaluatePlayerInput);
  };

  return (
    <section className="steamgreen w-[550px] h-[500px] flex flex-col items-center gap-10 text-white mt-5 border">
      <div className="steamDark w-96 h-40 flex justify-center items-center mt-5 rounded-lg">
        <p className="text-2xl">{gameInfo}</p>
      </div>

      <div className="steamDark w-96 h-40 flex justify-center items-center mt-5 rounded-lg">
        <ul className="flex flex-row text-2xl">
          {result.map((item, index) => (
            <li
              key={index}
              className={
                item.result === 'Incorrect'
                  ? 'text-red-500'
                  : item.result === 'Misplaced'
                  ? 'text-yellow-500'
                  : 'text-green-500'
              }
            >
              {item.letter}
            </li>
          ))}
        </ul>
      </div>

      <menu className="steamDark border border-white max-w-3xl h-96 flex flex-col justify-center items-center p-6 rounded-lg mb-5">
        <Checkbox
          checked={includeDouble}
          checkOne="Yes"
          checkBoxInfo="Should the word include double letters?"
          handleChange={(e) => {
            setIncludeDouble(e.target.checked);
          }}
        />

        <LetterQuantityDropdown
          label="Choose how many letters the word should include"
          handleChange={(e) => {
            setLetterQuantity(e.target.value);
          }}
        />

        <Button
          label="Start game!"
          handleClick={() => {
            setGameInfo('Start guessing!');
            postGameMode();
          }}
        />
        <PlayerInput
          label="Guess your word down here!"
          handlePlayerInput={(e) => {
            let input = e.target.value;
            setWordGuess(input);
          }}
        />

        <Button label="Guess word" handleClick={guessWord} />
      </menu>
    </section>
  );
}

export default GameFrame;
