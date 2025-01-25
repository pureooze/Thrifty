import { Router } from '@vaadin/router';

import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import './thrifty-home.js';
import './thrifty-expenses.js';
import { sharedStyles } from './shared-styles.js'

@customElement('thrifty-app')
export class ThriftyApp extends LitElement {
	@property({ type: String }) header = 'My app';

	static styles = [
		sharedStyles,
		css`
			main {
				display: flex;
				flex-direction: row;
				column-gap: 5rem;
				height: 100vh;
				width: 100vw;
			}

			.sidebar {
				background-color: black;
			}

			.main-content {
				width: 70%;
			}

			.navbar {
				display: flex;
				justify-content: center;
			}

			.navbar-items {
				display: flex;
				flex-direction: column;
				row-gap: 1rem;
				list-style: none;
				padding-left: 0;
			}

			.nav-item {
				font-size: 0.9rem;
				padding: 0.1rem 3rem;
				background-color: white;
				text-align: center;
			}
		`
	];

	firstUpdated() {
		const router = new Router(this.renderRoot.querySelector('#outlet'));
		router.setRoutes([
			{ path: '/', component: 'thrifty-home' },
			{ path: '/expenses', component: 'thrifty-expenses' }
		]);
	}

	render() {
		return html`
			<main class="app">
				<div class="sidebar">
					<nav class="navbar">
						<ul class="navbar-items">
							<a href="/"">
								<li class="nav-item">Dashboard</li>
							</a>
							<a href="/expenses">
								<li class="nav-item">Expenses</li>
							</a>
						</ul>
					</nav>
				</div>

				<div class="main-content" id="outlet">
				</div>
			</main>
		`;
	}
}
