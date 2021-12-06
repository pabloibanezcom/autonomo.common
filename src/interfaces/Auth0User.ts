export default interface Auth0User {
  auth0UserId: string;
  firstName: string;
  lastName: string;
  email: string;
  picture?: string;
}
