function Button({ label, handleClick }) {
  return (
    <div className="flex justify-center w-full ">
      <button
        onClick={handleClick}
        className="steamGreen hover:bg-green-800 text-white py-2 px-6 rounded-md mr-4"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
