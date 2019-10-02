
/**
 * Check amount
 * @param {string} amount
 * @returns {object} json response
 */
export const checkAmount = async (amount) => {
  const strippedAmount = (amount.endsWith('EUR'))
    ? amount.split(' ')[0] : amount;
  return strippedAmount;
};
