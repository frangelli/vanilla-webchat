export const clearDOMElement = el => {
  while (el.lastChild) {
    el.removeChild(el.lastChild);
  }
};

export const getCurrentUser = () => {
  return localStorage.getItem("vw-user");
};

export const login = username => {
  return localStorage.setItem("vw-user", username);
};

export const hasCssClass = (el, className) => el.classList.contains(className);

export const generateAvatarByUsername = username => {
  if (!username) return ":(";
  return `${username[0]}${username[username.length - 1]}`;
};

export const parseTimestamp = timestamp => {
  var d = new Date(timestamp * 1);
  var lang = navigator.language || `en`;
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return new Intl.DateTimeFormat(lang, options).format(d);
};
