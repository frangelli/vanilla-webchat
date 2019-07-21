import axios from "axios";

const API_BASE_URL = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`;
const TOKEN = "XfHdvAfPm3FB";

export const fetchMessages = (timestamp = null) => {
  let urlString = `${API_BASE_URL}/?token=${TOKEN}`;
  if (timestamp) {
    urlString += `&since=${timestamp}`;
  }
  return axios.get(urlString);
};

export const postMessage = ({ message, author }) => {
  return axios.post(
    `${API_BASE_URL}`,
    { message, author },
    { headers: { token: TOKEN } }
  );
};

export default {
  fetchMessages,
  postMessage
};
