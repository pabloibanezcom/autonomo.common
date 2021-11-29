import Address from './Address';
import Person from './Person';
import Shareholding from './Shareholding';

export default interface Company {
  name: string;
  cif_vat: string;
  address?: Address;
  director: Person;
  shareholdings: Shareholding[];
}