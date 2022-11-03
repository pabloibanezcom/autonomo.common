import { CurrencyAmount, ExchangeRate } from '../interfaces';
import { Currency } from '../types';

export const getLocaleFromCurrency = (currency: Currency): string => {
  if (currency === 'EUR') {
    return 'es-ES';
  }
  if (currency === 'USD') {
    return 'en-US';
  }
  return 'en-GB';
};

export const getCurrencySymbol = (currency: Currency): string => {
  return (0)
    .toLocaleString(getLocaleFromCurrency(currency), {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    .replace(/\d/g, '')
    .trim();
};

export const getExchangeRate = (
  exchangeRates: ExchangeRate[],
  currencyFrom: Currency,
  currencyTo: Currency
): ExchangeRate => {
  return (
    exchangeRates.find(r => r.currencyFrom === currencyFrom && r.currencyTo === currencyTo) ||
    exchangeRates.find(r => r.currencyFrom === currencyTo && r.currencyTo === currencyFrom)
  );
};

const add = (augend: CurrencyAmount, addend: CurrencyAmount): CurrencyAmount => {
  return {
    ...augend,
    amount: augend.amount + addend.amount
  };
};

const substract = (minuend: CurrencyAmount, subtrahend: CurrencyAmount): CurrencyAmount => {
  return {
    ...minuend,
    amount: minuend.amount - subtrahend.amount
  };
};

const multiply = (multiplicand: CurrencyAmount, multiplier: number): CurrencyAmount => {
  return {
    ...multiplicand,
    amount: multiplicand.amount * multiplier
  };
};

const percentage = (base: CurrencyAmount, pct: number): CurrencyAmount => {
  return {
    ...base,
    amount: Math.round(base.amount * (pct / 100))
  };
};

const exchange = (base: CurrencyAmount, exchangeRate: ExchangeRate): CurrencyAmount => {
  if (!base || !exchangeRate) {
    return null;
  }
  const orderedExchangeRate =
    exchangeRate.currencyFrom === base.currency
      ? exchangeRate
      : ({
          currencyFrom: exchangeRate.currencyTo,
          currencyTo: exchangeRate.currencyFrom,
          rate: parseFloat((1 / exchangeRate.rate).toFixed(2))
        } as ExchangeRate);
  return {
    amount: Math.round(base.amount * orderedExchangeRate.rate),
    currency: orderedExchangeRate.currencyTo
  };
};

export const Money = {
  add,
  substract,
  multiply,
  percentage,
  exchange
};
