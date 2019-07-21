import { template } from "lodash";
import { postMessage } from "services";

require("./styles.scss");
export default class MessageInput {
  elementTemplate = `
    <input id="message-field" placeholder="Message" />
    <button id="send-btn">Send</button>
  `;

  constructor() {
    this.$container = document.querySelector("#main");
    this.$el = null;
    this.$sendButton = null;
    this.$messageField = null;

    this.setupUI();
    this.setupEvents();
  }

  setupUI = () => {
    this.$el = document.createElement("section");
    this.$el.setAttribute("id", "message-input");
    const inputFn = template(this.elementTemplate);
    this.$el.innerHTML = inputFn();
    this.$container.appendChild(this.$el);
    this.$sendButton = this.$el.querySelector("#send-btn");
    this.$messageField = this.$el.querySelector("#message-field");
  };

  setupEvents = () => {
    this.$sendButton.addEventListener("click", this.onSendButtonClick);
  };

  // Event Handlers
  onSendButtonClick = e => {
    e.preventDefault();
    const content = this.$messageField.value;
    if (content) {
      postMessage({ author: "leo", message: content }).then(response => {
        document.dispatchEvent(
          new CustomEvent("add-message", {
            detail: { message: response.data },
            bubbles: true
          })
        );
      });
    }
  };
}
