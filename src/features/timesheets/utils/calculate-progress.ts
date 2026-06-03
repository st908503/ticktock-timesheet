export function calculateProgress(
  totalHours: number,
  targetHours = 40
) {
  return Math.min(
    Math.round((totalHours / targetHours) * 100),
    100
  );
}