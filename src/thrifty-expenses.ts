import '@vaadin/grid';
import '@vaadin/grid/vaadin-grid-sort-column.js';
import '@vaadin/grid/vaadin-grid-filter-column.js';
import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './thrifty-home.js'
import { sharedStyles } from './shared-styles.js';
import { Transaction } from './types/transaction.js';
import TransactionService from './services/transaction-service.js';
import { TransactionAggregate } from './types/transaction-aggregate.js';

@customElement('thrifty-expenses')
export class ThriftyExpenses extends LitElement {
	@property({ type: Array }) transactions: Transaction[] = [];

	static styles = [
		sharedStyles,
		css`
			.expense-table {
				height: 80%;
			}
		`
	];

	connectedCallback() {
		super.connectedCallback();
		this.transactions = TransactionService.fetchTransactions();
	}

	render() {
		return html`
			<h1>Expenses</h1>

			<vaadin-grid
				.items=${this.transactions}
				class="expense-table"
			>
				<vaadin-grid-sort-column
					path="date"
					header="Date"
					.renderer="${(root: HTMLElement, _: any, rowData: any) => {
						// Use Intl.DateTimeFormat or date-fns for formatting
						root.textContent = new Intl.DateTimeFormat('en-US', {
							year: 'numeric',
							month: 'short',
							day: '2-digit',
						}).format(new Date(rowData.item.date));
					}}"
				></vaadin-grid-sort-column>

				<!-- Category Column -->
				<vaadin-grid-filter-column path="category" header="Category"></vaadin-grid-filter-column>

				<!-- Amount Column -->
				<vaadin-grid-sort-column path="amount" header="Amount"></vaadin-grid-sort-column>

				<!-- Percentage Column -->
				<vaadin-grid-sort-column path="description" header="Description"></vaadin-grid-sort-column>
			</vaadin-grid>
		`;
	}
}
