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

// expense
const EXPENSE = 'expense';
const SEARCH_EXPENSES = concatRoutePaths([BUSINESS_ID, EXPENSE, SEARCH]);
const GET_EXPENSE = concatRoutePaths([BUSINESS_ID, EXPENSE, ID]);
const ADD_EXPENSE = concatRoutePaths([BUSINESS_ID, EXPENSE]);
const UPDATE_EXPENSE = concatRoutePaths([BUSINESS_ID, EXPENSE, ID]);
const DELETE_EXPENSE = concatRoutePaths([BUSINESS_ID, EXPENSE, ID]);
const ADD_FILE_TO_EXPENSE = concatRoutePaths([BUSINESS_ID, EXPENSE, ID, FILE]);
const DELETE_FILE_FROM_EXPENSE = concatRoutePaths([BUSINESS_ID, EXPENSE, ID, FILE]);

// income
const INCOME = 'income';
const SEARCH_INCOMES = concatRoutePaths([BUSINESS_ID, INCOME, SEARCH]);
const GET_INCOME = concatRoutePaths([BUSINESS_ID, INCOME, ID]);
const ADD_INCOME = concatRoutePaths([BUSINESS_ID, INCOME]);
const UPDATE_INCOME = concatRoutePaths([BUSINESS_ID, INCOME, ID]);
const DELETE_INCOME = concatRoutePaths([BUSINESS_ID, INCOME, ID]);
const ADD_FILE_TO_INCOME = concatRoutePaths([BUSINESS_ID, INCOME, ID, FILE]);
const DELETE_FILE_FROM_INCOME = concatRoutePaths([BUSINESS_ID, INCOME, ID, FILE]);

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

// tag
const TAG = 'tag';
const SEARCH_TAGS = concatRoutePaths([BUSINESS_ID, TAG, SEARCH]);
const ADD_TAG = concatRoutePaths([BUSINESS_ID, TAG]);
const UPDATE_TAG = concatRoutePaths([BUSINESS_ID, TAG, ID]);
const DELETE_TAG = concatRoutePaths([BUSINESS_ID, TAG, ID]);

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
const GET_BUSINESS_TAX_YEAR = concatRoutePaths([BUSINESS_ID, TAX_YEAR]);
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
  SEARCH_EXPENSES,
  GET_EXPENSE,
  ADD_EXPENSE,
  UPDATE_EXPENSE,
  DELETE_EXPENSE,
  ADD_FILE_TO_EXPENSE,
  DELETE_FILE_FROM_EXPENSE,
  SEARCH_INCOMES,
  GET_INCOME,
  ADD_INCOME,
  UPDATE_INCOME,
  DELETE_INCOME,
  ADD_FILE_TO_INCOME,
  DELETE_FILE_FROM_INCOME,
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
  SEARCH_TAGS,
  ADD_TAG,
  UPDATE_TAG,
  DELETE_TAG,
  SEARCH_TAX_PAYMENTS,
  GET_TAX_PAYMENT,
  ADD_TAX_PAYMENT,
  UPDATE_TAX_PAYMENT,
  DELETE_TAX_PAYMENT,
  SEARCH_TAX_YEARS,
  GET_TAX_YEAR,
  GET_BUSINESS_TAX_YEAR,
  ADD_TAX_YEAR,
  UPDATE_TAX_YEAR,
  DELETE_TAX_YEAR,
  GET_USER,
  GET_YEAR_REPORT
};
