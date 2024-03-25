function Checkbox({ checkOne, checkTwo, checkBoxInfo }) {
  return (
    <div className="flex justify-between w-full mb-4">
      <p>{checkBoxInfo}</p>

      <label htmlFor="IncludeDbl" className="flex items-center">
        <input
          type="checkbox"
          name="includeDouble"
          id="IncludeDbl"
          className="mr-2"
        />
        {checkOne}
      </label>

      <label htmlFor="notIncludeDbl" className="flex items-center">
        <input
          type="checkbox"
          name="notIncludeDouble"
          id="notIncludeDbl"
          className="mr-2"
        />
        {checkTwo}
      </label>
    </div>
  );
}

export default Checkbox;
