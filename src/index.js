import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

require("./styles/main.scss");
class VanillaWebchat {
  // initial component template
  elementTemplate = `
  <div id="main">
  </div>
  `;

  constructor() {
    this.container = document.body;
    this.setupUI();
  }

  setupUI = () => {
    this.container.innerHTML = this.elementTemplate;
    new MessageList();
    new MessageInput();
  };
}

const app = new VanillaWebchat();
