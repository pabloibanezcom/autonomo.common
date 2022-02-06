import {
  BaseFilter,
  BaseQuery,
  InvoiceFilter,
  InvoiceQuery,
  NationalInsurancePaymentFilter,
  NationalInsurancePaymentQuery,
  TaxPaymentFilter,
  TaxPaymentQuery
} from '../interfaces';

export const transformSearchFilterToQuery = (searchFilter: BaseFilter): BaseQuery => {
  const { startDate, endDate } = searchFilter;
  return {
    ...((startDate || endDate) && {
      date: { ...(startDate && { $gte: startDate }), ...(endDate && { $lte: endDate }) }
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

export const transformSearchFilterToTaxPaymentQuery = (searchFilter: TaxPaymentFilter): TaxPaymentQuery => {
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
