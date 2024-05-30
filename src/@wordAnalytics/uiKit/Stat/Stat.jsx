import './Stat.css';

export default function Stat({ metric, label }) {
  return (
    <section className="stat">
      <span className={`stat-metric ${metric < 0 ? 'stat-metric--limit' : ''}`}>
        {metric}
      </span>
      <h2 className="stat-title">{label}</h2>
    </section>
  );
}
