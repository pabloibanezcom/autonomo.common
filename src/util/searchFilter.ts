import { QueryOptions } from 'mongoose';
import {
  BaseFilter,
  BaseQuery,
  BaseSearchResult,
  BusinessFilter,
  BusinessQuery,
  CategoryFilter,
  CategoryQuery,
  CompanyFilter,
  CompanyQuery,
  InvoiceFilter,
  InvoiceQuery,
  NationalInsurancePaymentFilter,
  NationalInsurancePaymentQuery,
  Pagination,
  PersonFilter,
  PersonQuery,
  Sorting,
  TaxPaymentFilter,
  TaxPaymentQuery,
  TaxYearFilter,
  TaxYearQuery
} from '../interfaces';

export const transformPaginationToQueryOptions = (pagination: Pagination, sorting: Sorting): QueryOptions => {
  return {
    limit: pagination?.items,
    skip: pagination ? (pagination.page - 1) * pagination.items : undefined,
    sort: sorting?.sortBy ? `${sorting.desc ? '-' : ''}${sorting.sortBy}` : undefined
  };
};

export const transformSearchFilterToQuery = (searchFilter: BaseFilter): BaseQuery => {
  const { startDate, endDate } = searchFilter;
  return {
    ...((startDate || endDate) && {
      date: { ...(startDate && { $gte: startDate }), ...(endDate && { $lte: endDate }) }
    })
  };
};

export const transformSearchResultToFilter = (searchResult: BaseSearchResult): BaseFilter => {
  const newSearchResult = { ...searchResult };
  delete newSearchResult.items;
  return newSearchResult;
};

export const transformSearchFilterToBusinessQuery = (searchFilter: BusinessFilter): BusinessQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const transformSearchFilterToCategoryQuery = (searchFilter: CategoryFilter): CategoryQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const transformSearchFilterToCompanyQuery = (searchFilter: CompanyFilter): CompanyQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const transformSearchFilterToInvoiceQuery = (searchFilter: InvoiceFilter): InvoiceQuery => {
  const { startIssuedDate, endIssuedDate, startPaymentDate, endPaymentDate, type } = searchFilter;
  return {
    ...transformSearchFilterToQuery(searchFilter),
    ...((startIssuedDate || endIssuedDate) && {
      issuedDate: { ...(startIssuedDate && { $gte: startIssuedDate }), ...(endIssuedDate && { $lte: endIssuedDate }) }
    }),
    ...((startPaymentDate || endPaymentDate) && {
      paymentDate: {
        ...(startPaymentDate && { $gte: startPaymentDate }),
        ...(endPaymentDate && { $lte: endPaymentDate })
      }
    }),
    ...(type && { type: type })
  };
};

export const transformSearchFilterToNationalInsuranceQuery = (
  searchFilter: NationalInsurancePaymentFilter
): NationalInsurancePaymentQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const transformSearchFilterToPersonQuery = (searchFilter: PersonFilter): PersonQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const transformSearchFilterToTaxPaymentQuery = (searchFilter: TaxPaymentFilter): TaxPaymentQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const transformSearchFilterToTaxYearQuery = (searchFilter: TaxYearFilter): TaxYearQuery => {
  return {
    ...transformSearchFilterToQuery(searchFilter)
  };
};

export const buildPagination = (requestPagination: Pagination, totalItems: number): Pagination => {
  const page = requestPagination?.page || 1;
  const items = requestPagination?.items || 10;
  const totalPages = Math.ceil(totalItems / items);
  return {
    ...requestPagination,
    page,
    items,
    totalItems,
    totalPages,
    prevPage: page > 1 ? page - 1 : null,
    nextPage: page < totalPages ? page + 1 : null
  };
};

export const buildSorting = (sorting: Sorting, sortBy: string): Sorting => {
  return (
    sorting || {
      sortBy: sortBy || '_id',
      desc: false
    }
  );
};

export const buildSearchFilter = (searchFilter: BaseFilter, totalItems: number, sortBy: string = null): BaseFilter => {
  return {
    ...searchFilter,
    pagination: buildPagination(searchFilter.pagination, totalItems),
    sorting: buildSorting(searchFilter.sorting, sortBy)
  };
};
