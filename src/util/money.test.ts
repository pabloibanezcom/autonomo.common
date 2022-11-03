import { CurrencyAmount, ExchangeRate } from '../interfaces';
import { getCurrencySymbol, getExchangeRate, getLocaleFromCurrency, Money } from './money';

describe('getLocaleFromCurrency', () => {
  test('returns the locale given a currency', () => {
    const locale = getLocaleFromCurrency('EUR');
    expect(locale).toBe('es-ES');

    const locale2 = getLocaleFromCurrency('USD');
    expect(locale2).toBe('en-US');
  });

  test('returns the default locale if currency is not EUR nor USD', () => {
    const locale = getLocaleFromCurrency('BAM');
    expect(locale).toBe('en-GB');
  });
});

describe('getCurrencySymbol', () => {
  test('returns the locale currency symbol if currency is not EUR nor USD', () => {
    const locale = getCurrencySymbol('EUR');
    expect(locale).toBe('€');
  });
});

describe('getExchangeRate', () => {
  const exchangeRates: ExchangeRate[] = [
    {
      currencyFrom: 'GBP',
      currencyTo: 'EUR',
      rate: 1.15
    },
    {
      currencyFrom: 'EUR',
      currencyTo: 'USD',
      rate: 1
    }
  ];

  test('returns the exchange rate given two currencies', () => {
    const exchangeRate = getExchangeRate(exchangeRates, 'GBP', 'EUR');
    expect(exchangeRate).toStrictEqual({
      currencyFrom: 'GBP',
      currencyTo: 'EUR',
      rate: 1.15
    });
  });

  test('returns the exchange rate inverting the order of currencies if initial not found', () => {
    const exchangeRate = getExchangeRate(exchangeRates, 'EUR', 'GBP');
    expect(exchangeRate).toStrictEqual({
      currencyFrom: 'GBP',
      currencyTo: 'EUR',
      rate: 1.15
    });

    const exchangeRate2 = getExchangeRate(
      [...exchangeRates, { currencyFrom: 'EUR', currencyTo: 'GBP', rate: 0.87 }],
      'EUR',
      'GBP'
    );
    expect(exchangeRate2).toStrictEqual({
      currencyFrom: 'EUR',
      currencyTo: 'GBP',
      rate: 0.87
    });
  });
});

describe('Money', () => {
  const currencyAmountA: CurrencyAmount = {
    currency: 'GBP',
    amount: 6
  };

  const currencyAmountB: CurrencyAmount = {
    currency: 'GBP',
    amount: 4
  };

  describe('add', () => {
    test('add addend amount to augend amount', () => {
      const result = Money.add(currencyAmountA, currencyAmountB);
      expect(result.currency).toBe(currencyAmountA.currency);
      expect(result.amount).toBe(10);
    });
  });

  describe('substract', () => {
    test('substract subtrahend amount to minuend amount', () => {
      const result = Money.substract(currencyAmountA, currencyAmountB);
      expect(result.currency).toBe(currencyAmountA.currency);
      expect(result.amount).toBe(2);
    });
  });

  describe('multiply', () => {
    test('multiply multiplicand amount to multiplier', () => {
      const result = Money.multiply(currencyAmountA, 3);
      expect(result.amount).toBe(18);
    });
  });

  describe('percentage', () => {
    test('applyies percentage to amount', () => {
      const result = Money.percentage(currencyAmountA, 50);
      expect(result.amount).toBe(3);
    });
  });

  describe('exchange', () => {
    const exchangeA: ExchangeRate = {
      currencyFrom: 'GBP',
      currencyTo: 'EUR',
      rate: 1.15
    };

    const invertedExchange: ExchangeRate = {
      currencyFrom: 'EUR',
      currencyTo: 'GBP',
      rate: 0.87
    };

    test('transform currencyAmount into another currency based on exchange', () => {
      const result = Money.exchange(currencyAmountA, exchangeA);
      expect(result.currency).toBe('EUR');
      expect(result.amount).toBe(7);
    });

    test('applies exchange when exchangeRate is inverted ', () => {
      const result = Money.exchange(currencyAmountA, invertedExchange);
      expect(result.currency).toBe('EUR');
      expect(result.amount).toBe(7);
    });

    test('returns null if either base or exchangerate do not exist', () => {
      const result = Money.exchange(null, exchangeA);
      expect(result).toBe(null);
    });
  });
});
