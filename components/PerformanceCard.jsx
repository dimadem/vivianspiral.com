export default function PerformanceCard(params) {
  return (
    <div className="performance-card">
      <div className="performance-card__header__title">{params.title}</div>
      <div className="performance-card__body">
        <button>left</button>
        <div>
          description
          {params.body}
        </div>
        <button>right</button>
      </div>
      <div className="performance-card__buttons">
        <button>open description</button>
        <button>open images</button>
      </div>
      <div className="performance-card__footer">{params.footer}</div>
    </div>
  );
}
