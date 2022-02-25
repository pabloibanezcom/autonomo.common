export default interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  nif?: string;
  gender?: 'male' | 'female';
}
