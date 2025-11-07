// Mock endpoint: returns today's mood data (client-side fetch simulation)
export function getMoodData() {
  // Note: in a real backend this would be an HTTP endpoint.
  const today = new Date().toISOString().slice(0,10);
  return {
    user: "María González",
    date: today,
    mood: "Feliz",
    score: 82
  };
}
