import { LitElement, html } from 'lit';

class AppRouter extends LitElement {
	static routes = [
		{ path: '/', component: 'thrifty-home' },
		{ path: '/expenses', component: 'thrifty-expenses' },
	];

	connectedCallback() {
		super.connectedCallback();
		window.addEventListener('popstate', () => this.requestUpdate());
	}

	navigate(event: Event) {
		event.preventDefault();
		const href = (event.target as HTMLAnchorElement).getAttribute('href') || '/';
		history.pushState(null, '', href);
		this.requestUpdate();
	}

	getRouteComponent(path: string) {
		const route = AppRouter.routes.find(route => route.path === path);
		return route ? route.component : 'not-found';
	}

	render() {
		const path = window.location.pathname;
		const component = this.getRouteComponent(path);
		return html`
      <nav>
        <a href="/" @click="${this.navigate}">Home</a>
        <a href="/expenses" @click="${this.navigate}">Expenses</a>
      </nav>
      <main>
        <${component}></${component}>
      </main>
    `;
	}
}

customElements.define('app-router', AppRouter);
