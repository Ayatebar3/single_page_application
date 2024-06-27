import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHTML() {
    return `
      <h1>Dashboard</h1>
      <p>
        You are viewing the dashboard component.
      </p>
    `;
  }
}