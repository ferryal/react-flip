export const getCurrencyString = (number, locale = 'id-ID', currency = 'IDR', minimumSignificantDigits = 1) => {
  const rounded = Math.floor(number);
  const currencyFormat = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumSignificantDigits,
  });
  return currencyFormat.format(rounded);
};
