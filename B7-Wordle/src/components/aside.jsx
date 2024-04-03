function SidePanel() {
  return (
    <aside className="steamGreen mw-48 h-full fixed top-0 left-0 bottom-0 p-4 border-r-2 flex flex-col gap-10">
      <h1 className="text-white mb-4 text-3xl">Wordle Game</h1>
      <ul className="text-white flex flex-col gap-28 text-2xl">
        <li>
          <a href="/aboutus" className="block hover:bg-green-800 ">
            About Wordle-gaming
          </a>
        </li>
        <li>
          <a href="/" className="block hover:bg-green-800">
            Play the Wordle game
          </a>
        </li>
        <li>
          <a href="/highscore" className="block hover:bg-green-800">
            Check out the wordle highscore
          </a>
        </li>
        <li>
          <a href="/aboutus" className="block hover:bg-green-800">
            Check out more games
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SidePanel;
