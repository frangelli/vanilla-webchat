import { template } from "lodash";
import { getCurrentUser, login } from "utils";

require("./styles.scss");
export default class Login {
  elementTemplate = `
    <form id="login-form">
      <input id="login-field" placeholder="enter your username" />
      <button id="login-btn">LogIn</button>
    </form>
  `;
  constructor() {
    this.$container = document.body;
    this.$el = null;
    this.$loginButton = null;
    this.$loginField = null;
    this.setupUI();
  }

  setupUI = () => {
    const user = getCurrentUser();
    if (!user) {
      this.$el = document.createElement("div");
      this.$el.setAttribute("id", "login-wrapper");
      const loginFn = template(this.elementTemplate);
      this.$el.innerHTML = loginFn();
      this.$container.appendChild(this.$el);
      this.$loginButton = this.$el.querySelector("#login-btn");
      this.$loginField = this.$el.querySelector("#login-field");
      this.setupEvents();
    }
  };

  setupEvents = () => {
    this.$loginButton.addEventListener("click", this.onLoginButtonClick);
  };

  onLoginButtonClick = e => {
    e.preventDefault();
    const username = this.$loginField.value;
    if (username) {
      login(username);
      this.$el.classList.add("hidden");
      document.dispatchEvent(new Event("login", { bubbles: true }));
    }
  };
}
