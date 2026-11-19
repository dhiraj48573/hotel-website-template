/**
 * Format number to Indian Currency string (e.g., ₹ 1,850)
 */
export const formatCurrency = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Format standard input date (YYYY-MM-DD) to friendly display date (e.g. 15 Nov 2026)
 */
export const formatDisplayDate = (dateStr) => {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
};

/**
 * Clean phone number for tel: href
 */
export const cleanPhoneForTel = (phoneStr) => {
  return phoneStr.replace(/[^0-9+]/g, '');
};
