export function fmtDate(ts: number | null) {
  if (!ts) return "Unknown";
  const d = new Date(ts * 1000);
  return d.toLocaleDateString();
}
