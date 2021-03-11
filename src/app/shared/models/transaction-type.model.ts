export class TransactionType {
  id: number;
  description: string;

  constructor({ id = null, description = '' } = {}) {
    this.id = id;
    this.description = description;
  }
}
