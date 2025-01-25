import { LitElement, html, css, nothing } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Transaction } from './types/transaction.js';
import TransactionService from './services/transaction-service.js';
import { sharedStyles } from './shared-styles.js';
import { Category } from './types/category.js';
import { TransactionAggregate } from './types/transaction-aggregate.js';
import './dashboard-chart.js';

@customElement('thrifty-home')
export class ThriftyHome extends LitElement {
	@property({ type: Number }) count: number = 0;
	@property({ type: Number }) totalSpent: number = 0;
	@property({ type: Array }) transactions: Transaction[] = [];
	@property({ type: Object }) aggregates: TransactionAggregate = {
		[Category.Groceries]: 0,
		[Category.Rent]: 0,
		[Category.Utilities]: 0,
		[Category.Transportation]: 0,
		[Category.Entertainment]: 0,
		[Category.DiningOut]: 0,
		[Category.Clothing]: 0,
		[Category.Wellness]: 0,
		[Category.Other]: 0
	};

	static styles = [
		sharedStyles,
		css`
		`
	];

	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
		this.transactions = TransactionService.fetchTransactionsByDateRange(
			new Date(2023, 1, 1),
			new Date(2023, 1, 31)
		);
		this.count = this.transactions.length;
		this.totalSpent = this.transactions.reduce(
			(acc: number, curr: Transaction) => acc + curr.amount,
			0
		);

		this.transactions.forEach(transaction => {
			this.aggregates[transaction.category] += transaction.amount;
		});

	}

	render() {
		return html`
			<h1>Dashboard</h1>

			<div>
				<p><strong>Total Transactions:</strong> ${this.count}</p>
				<p><strong>Total Spent:</strong> $${this.totalSpent}</p>
			</div>

			<thrifty-dashboard-chart
				.aggregates=${this.aggregates}
			></thrifty-dashboard-chart>
			<h3>Expenses By Categories</h3>
			${this._getTransactionSummary()}
		`;
	}

	_getTransactionSummary() {
		if (!this.transactions) {
			return nothing;
		}

		if (this.transactions.length === 0) {
			return html`
				<p>No transactions found.</p>
			`;
		}

		return html`
			<table>
				<thead>
				<tr>
					<th>Category</th>
					<th>Amount</th>
					<th>Percent</th>
				</tr>
				</thead>
				<tbody>
				${
					Object.entries(this.aggregates).map(([category, amount]) => {
						const percent = this.totalSpent > 0 ? ((amount as number) / this.totalSpent) * 100 : 0;

						return html`
							<tr>
								<td>${category}</td> <!-- Convert enum key to string -->
								<td>${amount}</td>
								<td>${percent.toFixed(2)}%</td>
							</tr>
						`;
					})
				}
				</tbody>
			</table>
		`;
	}
}
