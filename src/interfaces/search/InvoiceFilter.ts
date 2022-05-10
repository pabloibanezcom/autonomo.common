import BaseFilter from './BaseFilter';

export default interface InvoiceFilter extends BaseFilter {
  startIssuedDate?: Date;
  endIssuedDate?: Date;
  startPaymentDate?: Date;
  endPaymentDate?: Date;
}
