import { template } from "lodash";
import { fetchMessages } from "services";

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

  setupEvents = () => {};

  setupData = () => {
    fetchMessages().then(response => {
      console.log(response);
    });
  };

  // Event Handlers
}
