import GameFrame from './gameComponents/gameFrame';
import SidePanel from './aside';
function MainSection() {
  return (
    <main className="flex flex-row steamDark h-full w-full">
      <SidePanel />
      <GameFrame />
    </main>
  );
}

export default MainSection;
