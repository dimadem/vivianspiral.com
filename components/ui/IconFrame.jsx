export default function IconFrame(params) {
  return (
    <div className="icon-frame">
      <div className="icon-frame__icon">{params.icon}</div>
      <div className="icon-frame__title">{params.title}</div>
    </div>
  );
}
