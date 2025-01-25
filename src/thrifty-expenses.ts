import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './thrifty-home.js'
import { sharedStyles } from './shared-styles.js';
import { Transaction } from './types/transaction.js';
import TransactionService from './services/transaction-service.js';

@customElement('thrifty-expenses')
export class ThriftyExpenses extends LitElement {
	@property({ type: Array }) transactions: Transaction[] = [];

	static styles = [
		sharedStyles,
		css`
		`
	];

	connectedCallback() {
		super.connectedCallback();
		this.transactions = TransactionService.fetchTransactions();
	}

	render() {
		return html`
			<h1>Expenses</h1>

			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Category</th>
						<th>Amount ($)</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
				${this.transactions.map((t: Transaction) => this._renderTransaction(t))}
				</tbody>
			</table>
		`;
	}

	private _renderTransaction(transaction: Transaction) {
		return html`
			<tr>
				<td>${transaction.date.toISOString().split('T')[0]}</td> <!-- Convert enum key to string -->
				<td>${transaction.category}</td>
				<td>${transaction.amount}</td>
				<td>${transaction.description}</td>
			</tr>
		`;
	}
}
