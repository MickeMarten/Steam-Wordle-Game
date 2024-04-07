function SidePanel() {
  return (
    <aside class="steamGreen mw-48 h-full border-r-2 p-4">
      <div className="h-screen flex flex-col gap-10">
        <h1 className="text-white mb-4 text-3xl">Wordle Gamingss</h1>
        <ul className="text-white flex flex-col gap-28 text-2xl">
          <li>
            <a href="/aboutus" className="block hover:bg-green-800">
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
      </div>
    </aside>
  );
}

export default SidePanel;
