import { Currency } from '../types';

export default interface ExchangeRate {
  currencyFrom: Currency;
  currencyTo: Currency;
  rate: number;
}
