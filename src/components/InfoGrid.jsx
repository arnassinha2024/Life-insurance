export default function InfoGrid({ items }) {
  return (
    <dl className="info-grid">
      {items.map(({ label, value }) => (
        <div className="info-item" key={label}>
          <dt>{label}</dt>
          <dd>{value ?? '—'}</dd>
        </div>
      ))}
    </dl>
  );
}
