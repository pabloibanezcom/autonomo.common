import { Types } from 'mongoose';
import { BusinessPerson, Company, Person } from '.';
import BusinessType from '../types/BusinessType';
import Currency from '../types/Currency';
import ExchangeRate from './ExchangeRate';

export default interface Business {
  _id?: Types.ObjectId;
  name: string;
  type: BusinessType;
  country: string;
  defaultCurrency?: Currency;
  exchangeRates?: ExchangeRate[];
  company?: Company;
  soleTrader?: Person;
  people: BusinessPerson[];
  nextInvoiceNumber: string;
  natureOfBusiness?: string;
}
