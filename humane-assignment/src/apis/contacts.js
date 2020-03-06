import axios from "axios";
import config from "../config";

export function getContacts(payload, send) {
  axios.post(`${config.host}/contacts`, payload).then(response => send(response.data)).catch(err => send());
}

