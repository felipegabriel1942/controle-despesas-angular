export class TransactionType {
  pkTransactionType: number;
  description: string;

  constructor({ pkTransactionType = null, description = '' } = {}) {
    this.pkTransactionType = pkTransactionType;
    this.description = description;
  }
}
