import { template } from "lodash";
import { fetchMessages } from "services";
import Message from "./Message";

require("./styles.scss");
export default class MessageList {
  constructor() {
    this.$container = document.querySelector("#main");
    this.$el = null;
    this.messages = [];
    this.setupUI();
    this.setupEvents();
    this.setupData();
  }

  setupUI = () => {
    this.$el = document.createElement("section");
    this.$el.setAttribute("id", "messages-wrapper");
    this.$container.appendChild(this.$el);
  };

  setupEvents = () => {
    document.addEventListener("add-message", this.onAddMessage);
  };

  setupData = () => {
    fetchMessages().then(response => {
      this.renderMessages(response.data);
    });
  };

  renderMessages = messages => {
    messages.forEach(message => {
      new Message(message);
    });
  };

  // Event Handlers
  onAddMessage = e => {
    const { message } = e.detail;
    if (message) {
      this.messages.push(message);
      this.renderMessages(this.messages);
    }
  };
}
