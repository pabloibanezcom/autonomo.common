import Company from './Company';
import Person from './Person';

export default interface Employment {
  employer: Company;
  emloyee: Person;
  salary: number;
  startDate: Date;
  endDate: Date;
}
