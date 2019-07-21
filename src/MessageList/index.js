import { fetchMessages } from "services";
import { getCurrentUser } from "utils";
import Message from "./Message";

require("./styles.scss");
export default class MessageList {
  constructor() {
    this.$container = document.querySelector("#main");
    this.$el = null;
    this.messages = [];
    this.lastFetch = Date.parse(new Date(Date.now() - 86400000));
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
    document.addEventListener("login", this.onLogin);
    // setup the interval to check for new messages
    this.interval = setInterval(this.setupData, 10000);
  };

  setupData = () => {
    fetchMessages(this.lastFetch).then(response => {
      if (response.data.length > 0) {
        this.messages = [...this.messages, ...response.data];
        this.renderMessages();
      }
      this.lastFetch = Date.now();
    });
  };

  renderMessages = () => {
    const user = getCurrentUser();
    if (user) {
      this.messages.forEach(message => {
        new Message(message);
      });
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  // Event Handlers
  onAddMessage = e => {
    const { message } = e.detail;
    if (message) {
      this.messages.push(message);
      this.renderMessages();
      this.lastFetch = Date.now();
    }
  };

  onLogin = () => {
    this.renderMessages();
  };
}
