import NavBar from "./NavBar";

export default function Header(children) {
  return (
    <header className="p-5 h-fit">
      <NavBar>{children}</NavBar>
    </header>
  );
}
