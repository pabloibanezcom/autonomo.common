import CurrencyAmount from './CurrencyAmount';

export default interface InvoicesStats {
  quantity: number;
  last?: Date;
  total?: CurrencyAmount;
}
