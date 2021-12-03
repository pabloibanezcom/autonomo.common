export default interface Person {
  auth0UserId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
}
