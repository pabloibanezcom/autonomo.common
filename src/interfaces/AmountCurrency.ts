import Currency from '../types/Currency';

export default interface AmountCurrency {
  amount: number;
  currency: Currency;
  primaryCurrencyRate?: number;
}
