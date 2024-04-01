import PlayerInput from './PlayerInput';
import Button from './button';
import { useState } from 'react';

function Modal({ showModal, onClick, playerName }) {
  return (
    <div
      className={
        showModal
          ? 'hidden'
          : 'fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 '
      }
    >
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-90"></div>
      <div className="steamDark p-8 rounded-lg shadow-lg z-30 flex flex-col gap-5 border border-white">
        <h1 className="text-2xl">
          Great job {playerName}! Would you like to publish your score?
        </h1>

        <Button label="Ok!" handleClick={onClick} />
        <Button
          label="Nah"
          handleClick={() => {
            location.reload();
          }}
        />
      </div>
    </div>
  );
}

export default Modal;
