const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

export const formatCurrency = (value) =>
  value === null || value === undefined ? '—' : inr.format(value);

export const formatDate = (iso) => {
  if (!iso) return '—';
  // Parse as local date to avoid timezone shifting the day.
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  if (Number.isNaN(date.getTime())) return '—';
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

const trimDecimals = (n) => n.toFixed(2).replace(/\.?0+$/, '');

export const formatCompactCurrency = (value) => {
  if (value >= 10000000) return `₹${trimDecimals(value / 10000000)} Cr`;
  if (value >= 100000) return `₹${trimDecimals(value / 100000)} L`;
  return formatCurrency(value);
};
