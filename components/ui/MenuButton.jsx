export default function MenuButton(params) {
  return (
    <div className="menu-button">
      <div className="menu-button__title">{params.title}</div>
      <div className="menu-button__subtitle">{params.subtitle}</div>
    </div>
  );
}
