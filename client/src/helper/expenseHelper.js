
/**
 * Check amount
 * @param {string} amount
 * @returns {Object} netAmount and VAT
 */
export const calculateVAT = (amount) => {
  const grossAmount = (amount.endsWith('EUR'))
    ? amount.split(' ')[0] : amount;

  const vat = (grossAmount - (grossAmount / 1.2)).toFixed(2);
  const netAmount = grossAmount - vat;
  return { vat, amount: netAmount };
};
