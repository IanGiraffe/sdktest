import { getAnalyticsResult } from '../api/analytics.js';

function formatObjectForDisplay(obj) {
  if (obj === null || obj === undefined) {
    return 'null or undefined';
  }
  return '<pre>' + JSON.stringify(obj, null, 2) + '</pre>';
}

export function setupAnalytics(rpc) {
  const getAnalyticsResultButton = document.getElementById('getAnalyticsResult');
  const analyticsOutput = document.getElementById('analyticsOutput');

  getAnalyticsResultButton.addEventListener('click', async () => {
    analyticsOutput.innerHTML = 'Loading...';
    try {
      const result = await getAnalyticsResult(rpc);
      analyticsOutput.innerHTML = formatObjectForDisplay(result);
    } catch (error) {
      analyticsOutput.innerHTML = `Error: ${error.message}`;
    }
  });
}
