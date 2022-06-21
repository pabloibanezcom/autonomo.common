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
  ExpenseFilter,
  ExpenseQuery,
  IncomeFilter,
  IncomeQuery,
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
    skip: pagination ? pagination.page * pagination.items : undefined,
    sort: sorting?.sortBy ? `${sorting.desc ? '-' : ''}${sorting.sortBy}` : undefined
  };
};

export const transformSearchFilterToQuery = (searchFilter: BaseFilter): BaseQuery => {
  const { startDate, endDate, match } = searchFilter;
  const filter: BaseQuery = {};
  if (startDate || endDate) {
    filter.date = { ...(startDate && { $gte: startDate }), ...(endDate && { $lte: endDate }) };
  }
  if (match) {
    filter[match.prop] = { $regex: match.str, $options: 'i' };
  }
  return filter;
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
  const { country } = searchFilter;
  return {
    ...transformSearchFilterToQuery(searchFilter),
    ...(country && { country })
  };
};

export const transformSearchFilterToIncomeQuery = (searchFilter: IncomeFilter): IncomeQuery => {
  const { startIssuedDate, endIssuedDate, startPaymentDate, endPaymentDate } = searchFilter;
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
    })
  };
};

export const transformSearchFilterToExpenseQuery = (searchFilter: ExpenseFilter): ExpenseQuery => {
  const { startIssuedDate, endIssuedDate, startPaymentDate, endPaymentDate } = searchFilter;
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
    })
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
  const page = requestPagination?.page || 0;
  const items = requestPagination?.items || 10;
  const totalPages = Math.ceil(totalItems / items);
  return {
    ...requestPagination,
    page,
    items,
    totalItems,
    totalPages,
    prevPage: page > 0 ? page - 1 : null,
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
