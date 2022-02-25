import { concatRoutePaths } from '../util/routes';

const ID = ':id';
const BUSINESS_ID = ':businessId';
const SEARCH = 'search';
const FILE = 'file';

// auth
const AUTH = 'auth';
const LOGIN = concatRoutePaths([AUTH, 'login']);
const REGISTER = concatRoutePaths([AUTH, 'register']);
const CHANGE_PASSWORD = concatRoutePaths([AUTH, 'change-password']);

// business
const BUSINESS = 'business';
const SEARCH_BUSINESSES = concatRoutePaths([BUSINESS, SEARCH]);
const GET_BUSINESS = concatRoutePaths([BUSINESS, ID]);
const ADD_BUSINESS = concatRoutePaths([BUSINESS]);

// category
const CATEGORY = 'category';
const SEARCH_CATEGORIES = concatRoutePaths([BUSINESS_ID, CATEGORY, SEARCH]);
const ADD_CATEGORY = concatRoutePaths([BUSINESS_ID, CATEGORY]);
const UPDATE_CATEGORY = concatRoutePaths([BUSINESS_ID, CATEGORY, ID]);
const DELETE_CATEGORY = concatRoutePaths([BUSINESS_ID, CATEGORY, ID]);

// company
const COMPANY = 'company';
const SEARCH_COMPANIES = concatRoutePaths([BUSINESS_ID, COMPANY, SEARCH]);
const GET_COMPANY = concatRoutePaths([BUSINESS_ID, COMPANY, ID]);
const ADD_COMPANY = concatRoutePaths([BUSINESS_ID, COMPANY]);
const UPDATE_COMPANY = concatRoutePaths([BUSINESS_ID, COMPANY, ID]);
const DELETE_COMPANY = concatRoutePaths([BUSINESS_ID, COMPANY, ID]);

// invoice
const INVOICE = 'invoice';
const SEARCH_INVOICES = concatRoutePaths([BUSINESS_ID, INVOICE, SEARCH]);
const GET_INVOICE = concatRoutePaths([BUSINESS_ID, INVOICE, ID]);
const ADD_INVOICE = concatRoutePaths([BUSINESS_ID, INVOICE]);
const UPDATE_INVOICE = concatRoutePaths([BUSINESS_ID, INVOICE, ID]);
const DELETE_INVOICE = concatRoutePaths([BUSINESS_ID, INVOICE, ID]);
const ADD_FILE_TO_INVOICE = concatRoutePaths([BUSINESS_ID, INVOICE, ID, FILE]);
const DELETE_FILE_FROM_INVOICE = concatRoutePaths([BUSINESS_ID, INVOICE, ID, FILE]);

// national insurance payment
const NATIONAL_INSURANCE_PAYMENT = 'national-insurance-payment';
const SEARCH_NATIONAL_INSURANCE_PAYMENTS = concatRoutePaths([BUSINESS_ID, NATIONAL_INSURANCE_PAYMENT, SEARCH]);
const GET_NATIONAL_INSURANCE_PAYMENT = concatRoutePaths([BUSINESS_ID, NATIONAL_INSURANCE_PAYMENT, ID]);
const ADD_NATIONAL_INSURANCE_PAYMENT = concatRoutePaths([BUSINESS_ID, NATIONAL_INSURANCE_PAYMENT]);
const UPDATE_NATIONAL_INSURANCE_PAYMENT = concatRoutePaths([BUSINESS_ID, NATIONAL_INSURANCE_PAYMENT, ID]);
const DELETE_NATIONAL_INSURANCE_PAYMENT = concatRoutePaths([BUSINESS_ID, NATIONAL_INSURANCE_PAYMENT, ID]);

// person
const PERSON = 'person';
const SEARCH_PEOPLE = concatRoutePaths([BUSINESS_ID, PERSON, SEARCH]);
const GET_PERSON = concatRoutePaths([BUSINESS_ID, PERSON, ID]);
const ADD_PERSON = concatRoutePaths([BUSINESS_ID, PERSON]);
const UPDATE_PERSON = concatRoutePaths([BUSINESS_ID, PERSON, ID]);
const DELETE_PERSON = concatRoutePaths([BUSINESS_ID, PERSON, ID]);

// tax payment
const TAX_PAYMENT = 'tax-payment';
const SEARCH_TAX_PAYMENTS = concatRoutePaths([BUSINESS_ID, TAX_PAYMENT, SEARCH]);
const GET_TAX_PAYMENT = concatRoutePaths([BUSINESS_ID, TAX_PAYMENT, ID]);
const ADD_TAX_PAYMENT = concatRoutePaths([BUSINESS_ID, TAX_PAYMENT]);
const UPDATE_TAX_PAYMENT = concatRoutePaths([BUSINESS_ID, TAX_PAYMENT, ID]);
const DELETE_TAX_PAYMENT = concatRoutePaths([BUSINESS_ID, TAX_PAYMENT, ID]);

// tax year
const TAX_YEAR = 'tax-year';
const SEARCH_TAX_YEARS = concatRoutePaths([TAX_YEAR, SEARCH]);
const GET_TAX_YEAR = concatRoutePaths([TAX_YEAR, ID]);
const ADD_TAX_YEAR = concatRoutePaths([TAX_YEAR]);
const UPDATE_TAX_YEAR = concatRoutePaths([TAX_YEAR, ID]);
const DELETE_TAX_YEAR = concatRoutePaths([TAX_YEAR, ID]);

// user
const USER = 'user';
const GET_USER = concatRoutePaths([USER]);

// year report
const YEAR_REPORT = 'year-report';
const GET_YEAR_REPORT = concatRoutePaths([BUSINESS_ID, YEAR_REPORT, ID]);

export const Routes = {
  LOGIN,
  REGISTER,
  CHANGE_PASSWORD,
  SEARCH_BUSINESSES,
  GET_BUSINESS,
  ADD_BUSINESS,
  SEARCH_CATEGORIES,
  ADD_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
  SEARCH_COMPANIES,
  GET_COMPANY,
  ADD_COMPANY,
  UPDATE_COMPANY,
  DELETE_COMPANY,
  SEARCH_INVOICES,
  GET_INVOICE,
  ADD_INVOICE,
  UPDATE_INVOICE,
  DELETE_INVOICE,
  ADD_FILE_TO_INVOICE,
  DELETE_FILE_FROM_INVOICE,
  SEARCH_NATIONAL_INSURANCE_PAYMENTS,
  GET_NATIONAL_INSURANCE_PAYMENT,
  ADD_NATIONAL_INSURANCE_PAYMENT,
  UPDATE_NATIONAL_INSURANCE_PAYMENT,
  DELETE_NATIONAL_INSURANCE_PAYMENT,
  SEARCH_PEOPLE,
  GET_PERSON,
  ADD_PERSON,
  UPDATE_PERSON,
  DELETE_PERSON,
  SEARCH_TAX_PAYMENTS,
  GET_TAX_PAYMENT,
  ADD_TAX_PAYMENT,
  UPDATE_TAX_PAYMENT,
  DELETE_TAX_PAYMENT,
  SEARCH_TAX_YEARS,
  GET_TAX_YEAR,
  ADD_TAX_YEAR,
  UPDATE_TAX_YEAR,
  DELETE_TAX_YEAR,
  GET_USER,
  GET_YEAR_REPORT
};
