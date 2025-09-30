function formatObjectForDisplay(obj) {
  if (obj === null || obj === undefined) {
    return 'null or undefined';
  }
  return '<pre>' + JSON.stringify(obj, null, 2) + '</pre>';
}

export function setupAnalytics(rpc) {
  const getAnalyticsResultButton = document.getElementById('getAnalyticsResult');
  const analyticsOutput = document.getElementById('analyticsOutput');

  if (!getAnalyticsResultButton || !analyticsOutput) {
    console.warn('Analytics UI elements missing; skipping analytics setup.');
    return;
  }

  getAnalyticsResultButton.addEventListener('click', async () => {
    analyticsOutput.innerHTML = 'Loading...';
    try {
      if (!rpc || typeof rpc.invoke !== 'function') {
        throw new Error('rpc.invoke is unavailable. Ensure the app runs inside a Giraffe iframe.');
      }
      const result = await rpc.invoke('getAnalyticsResult', []);
      analyticsOutput.innerHTML = formatObjectForDisplay(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      analyticsOutput.innerHTML = `Error: ${message}`;
    }
  });
}