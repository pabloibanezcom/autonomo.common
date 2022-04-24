import { Types } from 'mongoose';
import { AuthorisedPerson, Company, Person } from '.';
import BusinessType from '../types/BusinessType';
import Currency from '../types/Currency';
import ExchangeRate from './ExchangeRate';

export default interface Business {
  _id?: Types.ObjectId;
  name: string;
  type: BusinessType;
  defaultCurrency?: Currency;
  exchangeRates?: ExchangeRate[];
  company?: Company;
  soleTrader?: Person;
  authorisedPeople: AuthorisedPerson[];
}
