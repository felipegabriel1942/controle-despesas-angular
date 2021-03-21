import { TransactionCategory } from './transaction-category.model';
import { TransactionType } from './transaction-type.model';
import { User } from './user.model';

export class Transaction {
  id: number;
  description: string;
  value: number;
  transactionDate: Date;
  type: TransactionType;
  category: TransactionCategory;
  user: User;

  constructor({
    id = null,
    description = '',
    value = null,
    transactionDate = new Date(),
    type = null,
    category = null,
    user = null,
  } = {}) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.transactionDate = transactionDate;
    this.type = type;
    this.category = category;
    this.user = user;
  }
}
