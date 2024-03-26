function LetterQuantityDropdown({ label, handleChange }) {
  const options = [];

  for (let i = 2; i < 11; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <label htmlFor="letterQuantity" className="text-lg mb-2">
        {label}
      </label>
      <select
        name="letters"
        id="letterQuantity"
        className="steamGreen text-white border border-white-600 rounded-md py-2 px-4 mb-4 w-full"
        onChange={handleChange}
      >
        <option value="defaultValue" disabled selected>
          Select your option
        </option>
        {options}
      </select>
    </div>
  );
}

export default LetterQuantityDropdown;
