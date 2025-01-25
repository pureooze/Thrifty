import { Category } from './category.js';

export class Transaction {
	description: string;
	date: Date;
	amount: number;
	category: Category;

	constructor(description: string, date: Date, amount: number, category: Category) {
		this.description = description;
		this.date = date;
		this.amount = amount;
		this.category = category;
	}
}
