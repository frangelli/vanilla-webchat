import axios from "axios";

const API_BASE_URL = `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0`;
const TOKEN = "XfHdvAfPm3FB";

export const fetchMessages = () => {
  return axios.get(`${API_BASE_URL}/?token=${TOKEN}`);
};

export const postMessage = ({ message, author }) => {
  return axios.post(
    `${API_BASE_URL}/users`,
    { message, author },
    { token: TOKEN }
  );
};

export default {
  fetchMessages,
  postMessage
};
