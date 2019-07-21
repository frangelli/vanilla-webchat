import { template } from "lodash";

require("./styles.scss");
export default class Message {
  elementTemplate = `
    <div class="author"><%= author %></div>
    <div class="message-content"><%= content %></div>
    <div class="sent-at"><%= sentAt %></div>
  `;

  constructor(message) {
    this.$container = document.querySelector("#messages-wrapper");
    this.$el = null;
    this.message = message;
    this.setupUI();
  }

  setupUI = () => {
    const { _id: id, author, message, timestamp } = this.message;
    this.$el = document.createElement("section");
    this.$el.setAttribute("id", id);
    this.$el.classList.add("message");
    this.$el.classList.add("others");
    const messageFn = template(this.elementTemplate);
    this.$el.innerHTML = messageFn({
      author: author,
      content: message,
      sentAt: timestamp
    });
    this.$container.appendChild(this.$el);
  };
}
