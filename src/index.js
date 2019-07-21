import { getCurrentUser } from "utils";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import Login from "./Login";

require("./styles/main.scss");
class VanillaWebchat {
  // initial component template
  elementTemplate = `
  <div id="main">
  </div>
  `;

  constructor() {
    this.$container = document.body;
    this.$el = null;
    this.setupUI();
    this.setupEvents();
  }

  setupUI = () => {
    this.$container.innerHTML = this.elementTemplate;
    this.$el = document.querySelector("#main");
    const user = getCurrentUser();
    if (!user) {
      this.$el.classList.add("hidden");
    }
    new MessageList();
    new MessageInput();
    new Login();
  };

  setupEvents = () => {
    document.addEventListener("login", this.onLogin);
  };

  onLogin = () => {
    this.$el.classList.remove("hidden");
  };
}

const app = new VanillaWebchat();
