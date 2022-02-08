import { QueryOptions } from 'mongoose';
import {
  BaseFilter,
  BaseQuery,
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
  if (!pagination) {
    return null;
  }
  return {
    limit: pagination.items,
    skip: (pagination.page - 1) * pagination.items,
    sort: sorting?.sortBy ? `${sorting.desc && '-'}${sorting.sortBy}` : undefined
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
  const totalPages = Math.ceil(totalItems / requestPagination.items);
  return {
    ...requestPagination,
    totalItems,
    totalPages,
    prevPage: requestPagination.page > 1 ? requestPagination.page - 1 : null,
    nextPage: requestPagination.page < totalPages ? requestPagination.page + 1 : null
  };
};
