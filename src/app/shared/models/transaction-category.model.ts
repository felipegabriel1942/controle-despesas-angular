export class TransactionCategory {
  id: number;
  description: string;
  type: number;

  constructor({ id = null, description = '', type = null } = {}) {
    this.id = id;
    this.description = description;
    this.type = type;
  }
}
