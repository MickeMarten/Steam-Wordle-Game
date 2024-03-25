import Button from './button';
import LetterQuantityDropdown from './droppDown';
import PlayerInput from './PlayerInput';
import Checkbox from './CheckBox';
import { evaluateGameInput } from '../../Algorithms/gameHandler';
import { useState } from 'react';
function GameFrame() {
  const [gameInfo, setGameInfo] = useState('Choose gamemode');
  const [wordGuess, setWordGuess] = useState('');
  const [result, setResult] = useState([]);

  const mockList = 'aylin';

  const evaluatePlayerInput = evaluateGameInput(wordGuess, mockList);

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
          checkOne="Yes"
          checkTwo="No"
          checkBoxInfo="Should the word include double letters?"
        />

        <LetterQuantityDropdown label="Choose how many letters the word should include" />
        <Button
          label="Start game!"
          handleClick={() => {
            setGameInfo('Start guessing!');
          }}
        />
        <PlayerInput
          label="Guess your word down here!"
          handlePlayerInput={(e) => {
            let input = e.target.value;
            setWordGuess(input);
          }}
        />

        <Button
          label="Guess word"
          handleClick={() => {
            const newResult = evaluatePlayerInput.map((item) => ({
              letter: item.letter,
              result: item.result,
            }));

            setResult(newResult);
          }}
        />
      </menu>
    </section>
  );
}

export default GameFrame;
