export default interface Person {
  firstName: string;
  lastName: string;
  email: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
}
