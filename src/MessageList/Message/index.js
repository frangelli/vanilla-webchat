import { template } from "lodash";
import {
  generateAvatarByUsername,
  parseTimestamp,
  getCurrentUser
} from "utils";

require("./styles.scss");
export default class Message {
  elementTemplate = `
    <div class="avatar"><%= avatar %> </div>
    <div class="message">
      <div class="author"><%= author %></div>
      <div class="content"><%= content %></div>
      <div class="sent-at"><%= sentAt %></div>
    </div>
  `;

  constructor(message) {
    this.$container = document.querySelector("#messages-wrapper");
    this.$el = null;
    this.message = message;
    this.setupUI();
  }

  setupUI = () => {
    const { _id: id, author, message, timestamp } = this.message;
    const user = getCurrentUser();
    this.$el = document.createElement("section");
    this.$el.setAttribute("id", id);
    this.$el.classList.add("message-wrapper");
    this.$el.classList.add(author === user ? "me" : "others");
    const messageFn = template(this.elementTemplate);
    this.$el.innerHTML = messageFn({
      avatar: generateAvatarByUsername(author),
      author: author,
      content: message,
      sentAt: parseTimestamp(timestamp)
    });
    this.$container.appendChild(this.$el);
  };
}
