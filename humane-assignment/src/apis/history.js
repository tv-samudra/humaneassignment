import axios from "axios";
import config from "../config";

export function getHistory(payload, send) {
  axios.post(`${config.host}/histories`, payload).then(response => send(response.data)).catch(err => send());
}

