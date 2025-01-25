import { Category } from './category.js';

export type TransactionAggregate = {
	[key in Category]: number;
}
