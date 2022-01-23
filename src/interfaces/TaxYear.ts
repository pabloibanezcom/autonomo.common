import TaxDefinition from './TaxDefinition';

export default interface TaxYear {
  name: string;
  country: string;
  startDate: Date;
  endDate: Date;
  incomeTax: TaxDefinition;
  dividendsTax: TaxDefinition;
}
