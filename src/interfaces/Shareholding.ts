import Company from './Company';
import Person from './Person';

export default interface Shareholding {
  company: Company;
  shareholder: Person;
  percentage: number;
  startDate?: Date;
  endDate?: Date;
}
