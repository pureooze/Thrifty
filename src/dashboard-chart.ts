import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import Chart from 'chart.js/auto';
import { TransactionAggregate } from './types/transaction-aggregate.js';
import { Category } from './types/category.js';

@customElement('thrifty-dashboard-chart')
class ThriftyDashboardChart extends LitElement {
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

	private chart: Chart | null = null;

	firstUpdated() {
		// Create the chart when the component is first rendered
		const ctx = this.renderRoot.querySelector('canvas')!.getContext('2d');
		if (ctx === null) {
			return;
		}

		const sortedEntries = Object.entries(this.aggregates)
			.sort((a, b) => b[1] - a[1]);

		const sortedLabels = sortedEntries.map((entry) => entry[0]);
		const sortedData = sortedEntries.map((entry) => entry[1]);
		const total = sortedData.reduce((sum, val) => sum + val, 0);

		this.chart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: sortedLabels,
				datasets: [{
					label: 'Spending',
					data: sortedData,
					backgroundColor: ['red', 'blue', 'green', 'orange']
				}]
			},
			options: {
				responsive: true,
				scales: {
					y: {
						beginAtZero: true, // Start y-axis from zero
						max: total, // Set maximum to the total value
						title: {
							display: true,
							text: 'Spending ($)',
						},
					},
				}
			}
		});
	}

	render() {
		return html`<canvas width="400" height="200"></canvas>`;
	}
}
