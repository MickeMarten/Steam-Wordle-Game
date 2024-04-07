import GameFrame from './gameComponents/gameFrame';
import SidePanel from './aside';
function MainSection() {
  return (
    <main className="flex steamDark h-5/5">
      <SidePanel />
      <GameFrame />
    </main>
  );
}

export default MainSection;
