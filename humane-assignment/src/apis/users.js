import axios from "axios";
import config from "../config";

export function authenticate(payload, send) {
  axios.post(`${config.host}/users/login`, payload).then(response => send(response.data)).catch(err => send());
}

