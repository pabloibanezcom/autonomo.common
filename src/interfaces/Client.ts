import Address from './Address';

export default interface Client {
  name: string;
  type: 'person' | 'business'
  cif_vat: string;
  address?: Address;
}