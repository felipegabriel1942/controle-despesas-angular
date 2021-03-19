import { TransactionType } from './transaction-type.model';

export class TransactionCategory {
  id: number;
  description: string;
  type: TransactionType;

  constructor({
    id = null,
    description = '',
    type = new TransactionType(),
  } = {}) {
    this.id = id;
    this.description = description;
    this.type = type;
  }
}
