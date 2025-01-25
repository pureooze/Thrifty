import { css } from 'lit';

export const sharedStyles = css`
	:host {
		font-family: 'Noto Sans', sans-serif;
		font-size: medium;

		--font-family-monospace: Consolas, Menlo, Monaco, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Courier New, Courier, monospace;
		--syntax-tab-size: 2;
		font-weight: 400;

		/*colors*/
		--pureooze-light-mode-primary: #f2f2f2;
		--pureooze-primary: #26196f;
		--pureooze-primary-for-rgba: 146, 50, 216;
		--pureooze-primary-text: #000;
		--pureooze-secondary-text: white;
		--pureooze-accent: #9232D8FF;
		--pureooze-accent-light: #ac73d8;
		--pureooze-accent-light-mode: #f9f9f9;
		--pureooze-detail: #aaa;
		--pureooze-light-mode-detail: white;
	}

	html, body {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}

	table {
		border-collapse: collapse;
		width: 100%;
		margin-top: 0.5em;
	}

	/* Style for table headers */

	thead tr {
		background-color: var(--pureooze-primary);
		color: var(--pureooze-secondary-text);
		text-align: left;
	}

	th, td {
		padding: 0.5em 1em;
		text-align: left;
		border: 1px solid var(--pureooze-primary);
	}

	tbody tr:nth-child(odd) {
		background-color: var(--pureooze-light-mode-primary);
	}

	button {
		cursor: pointer;
		font-weight: bold;
		padding: 1px;
		background-color: #fff;
		border-radius: 4px;
		color: #333;
		border: 1px solid var(--pureooze-primary);
	}

	button:hover {
		background-color: rgba(var(--pureooze-primary-for-rgba), 0.1);
		border: 1px solid var(--pureooze-primary);
	}

	button::-webkit-details-marker {
		display: none;
	}
`;
