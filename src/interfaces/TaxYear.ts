import TaxDefinition from './TaxDefinition';

export default interface TaxYear {
  country: string;
  startDate: Date;
  endDate: Date;
  incomeTax: TaxDefinition;
  dividendsTax: TaxDefinition;
}
