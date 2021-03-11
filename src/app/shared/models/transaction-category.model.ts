export class TransactionCategory {
  pkTransactionCategory: number;
  description: string;
  fkTransactionType: number;

  constructor({
    pkTransactionCategory = null,
    description = '',
    fkTransactionType = null,
  } = {}) {
    this.pkTransactionCategory = pkTransactionCategory;
    this.description = description;
    this.fkTransactionType = fkTransactionType;
  }
}
