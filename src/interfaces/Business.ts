import { PopulatedDoc, Types } from 'mongoose';
import { BusinessPerson, Company, Person, TaxYear } from '.';
import { BusinessType } from '../enums';
import Currency from '../types/Currency';
import ExchangeRate from './ExchangeRate';

export default interface Business {
  _id?: Types.ObjectId;
  key: string;
  name: string;
  type: BusinessType;
  country: string;
  defaultCurrency?: Currency;
  exchangeRates?: ExchangeRate[];
  company?: PopulatedDoc<Company>;
  soleTrader?: PopulatedDoc<Person>;
  tradingStartDate?: Date;
  people: BusinessPerson[];
  currentTaxYear?: TaxYear;
  nextInvoiceNumber: string;
  natureOfBusiness?: string;
}
