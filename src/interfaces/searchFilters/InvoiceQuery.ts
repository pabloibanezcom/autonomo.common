import BaseQuery from './BaseQuery';
import DateQuery from './DateQuery';

export default interface InvoiceQuery extends BaseQuery {
  issuedDate?: DateQuery;
  paymentDate?: DateQuery;
}
