export class User {
  id: number;
  email: string;
  userPassword: string;

  constructor({ id = null, email = '', userPassword = '' } = {}) {
    this.id = id;
    this.email = email;
    this.userPassword = userPassword;
  }
}
