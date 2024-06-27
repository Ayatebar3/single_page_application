import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHTML() {
    return `
      <h1>Post</h1>
      <p>
        You are viewing the posts component.
      </p>
    `;
  }
}