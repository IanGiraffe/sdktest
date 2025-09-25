/**
 * Calls the getAnalyticsResult SDK function.
 * @param {any} rpc - RPC instance from the Giraffe SDK
 * @returns {Promise<any>} A promise that resolves with the analytics result.
 */
export async function getAnalyticsResult(rpc) {
  console.log('Calling getAnalyticsResult...');
  try {
    // We don't have arguments for this function yet, so we'll pass an empty array.
    const result = await rpc.invoke('getAnalyticsResult', []);
    console.log('getAnalyticsResult raw response:', result);
    return result;
  } catch (error) {
    console.error('Error calling getAnalyticsResult:', error);
    throw error;
  }
}
