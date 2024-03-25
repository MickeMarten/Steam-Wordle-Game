function PlayerInput({ label, handlePlayerInput }) {
  return (
    <>
      <label htmlFor="playerInput" className="text-lg mb-2">
        {label}
      </label>
      <input
        type="text"
        name="playerInput"
        id="playerInput"
        className="steamGreen text-white border border-white-600 rounded-md py-2 px-4 mb-4 w-full"
        onChange={handlePlayerInput}
      />
    </>
  );
}

export default PlayerInput;
