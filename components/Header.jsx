import MainMenu from "./MainMenu";
import Logo from "./ui/Logo";

export default function Header(params) {
  return (
    <header className="flex flex-row w-full justify-between p-5">
      <Logo />
      <MainMenu />
    </header>
  );
}
