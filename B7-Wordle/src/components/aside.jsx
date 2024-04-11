function SidePanel() {
  return (
    <aside class="steamGreen max-w-48 h-full border-r p-4">
      <div className="h-screen flex flex-col gap-10">
        <h1 className="text-white mb-4 sm:text-3xl">Wordle Gamings</h1>
        <ul className="text-white flex flex-col gap-28 sm:text-2xl">
          <li className="steamDark hover:bg-green-800 text-white font-bold py-2 px-4 rounded border">
            <a href="/aboutus" className="">
              About Wordle-gaming
            </a>
          </li>
          <li className="steamDark hover:bg-green-800 text-white font-bold py-2 px-4 rounded border">
            <a href="/" className="">
              Play the Wordle game
            </a>
          </li>
          <li className="steamDark hover:bg-green-800 text-white font-bold py-2 px-4 rounded border">
            <a href="/highscore" className="">
              Check out the wordle highscore
            </a>
          </li>
          <li className="steamDark hover:bg-green-800 text-white font-bold py-2 px-4 rounded border">
            <a href="/aboutus" className="">
              Check out more games
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SidePanel;
