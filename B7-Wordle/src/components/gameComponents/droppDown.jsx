function LetterQuantityDropdown({ label }) {
  return (
    <div>
      <label htmlFor="letterQuantity" className="text-lg mb-2">
        {label}
      </label>
      <select
        name="letters"
        id="letterQuantity"
        className="steamGreen text-white border border-white-600 rounded-md py-2 px-4 mb-4 w-full"
      >
        <option value="defaultValue" disabled selected>
          Select your option
        </option>
        <option value="2">2: Easy</option>
        <option value="3">3: Easy</option>
        <option value="4">4: Easy</option>
        <option value="5">5: Medium</option>
        <option value="6">6: Medium</option>
        <option value="7">7: Hard</option>
        <option value="8">8: Hard</option>
        <option value="9">9: Hard</option>
        <option value="10">10: Hard</option>
      </select>
    </div>
  );
}

export default LetterQuantityDropdown;
