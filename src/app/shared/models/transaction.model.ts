export class Transaction {
  id: number;
  description: string;
  value: number;
  date: Date;
  type: number;
  category: number;

  constructor({
    id = null,
    description = '',
    value = null,
    date = new Date(),
    type = null,
    category = null,
  } = {}) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.date = date;
    this.type = type;
    this.category = category;
  }
}
