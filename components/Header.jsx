import MainMenu from "./MainMenu";
import Logo from "./ui/Logo";

export default function Header(params) {
  return (
    <header className="top-0 left-0 z-30 flex flex-row w-screen justify-between items-center p-5">
      <Logo />
      <MainMenu />
    </header>
  );
}
