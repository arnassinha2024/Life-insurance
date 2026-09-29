export default function Card({ id, title, icon, children, className = '' }) {
  return (
    <section id={id} className={`card ${className}`}>
      <header className="card-header">
        {icon && <span className="card-icon" aria-hidden="true">{icon}</span>}
        <h2>{title}</h2>
      </header>
      <div className="card-body">{children}</div>
    </section>
  );
}
