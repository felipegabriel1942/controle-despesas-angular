export class TransactionType {
  pkTransaction: number;
  description: string;

  constructor({ pkTransactionType = null, description = '' } = {}) {
    this.pkTransaction = pkTransactionType;
    this.description = description;
  }
}
