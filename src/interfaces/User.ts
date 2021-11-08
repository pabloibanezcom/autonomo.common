export default interface User {
  firstName: string;
  lastName: string;
  email: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
}
