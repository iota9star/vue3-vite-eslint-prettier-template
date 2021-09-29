import axios from "axios";
import { U8 } from "../utils/uuid";

const http = axios.create({
  timeout: 60 * 1000,
  withCredentials: true,
});

const catchError = (error) => {
  const data = error.data || {};
  error = error || {};
  if (error) {
    if (error instanceof axios.Cancel) {
      return console.debug(error.message);
    } else if (error.status === 401 || data.code === 401) {
      console.error(`Authentication failed...`);
    }
  }
  return Promise.reject({ error, code: data.code || -1, msg: data.msg || error.message || `请求失败` });
};

// append timestamp to url query.
const at = (url) => {
  const now = Date.now();
  if (/\\?\S+?=/.test(url)) {
    return `${url}&_t=${now}`;
  }
  return `${url}?_t=${now}`;
};

http.interceptors.request.use((config) => {
  // many request configs...
  config.url = at(config.url);
  config.headers[`x-trace-id`] = U8();
  return config;
}, catchError);

http.interceptors.response.use((resp) => {
  const data = resp.data || {};
  if (resp.status !== 200) {
    return catchError(resp);
  }
  return data;
}, catchError);

const post = (url, data, config) => http.post(url, data, config);

const put = (url, data, config) => http.put(url, data, config);

const get = (url, config) => http.get(url, config);

const del = (url, config) => http.delete(url, config);

const head = (url, config) => http.head(url, config);

const options = (url, config) => http.options(url, config);

const patch = (url, data, config) => http.patch(url, data, config);

const tokens = {
  _tokens: {},
  get(key) {
    if (this._tokens[key]) {
      this._tokens[key].cancel(`cancel request: ${key}`);
    }
    this._tokens[key] = axios.CancelToken.source();
    return this._tokens[key].token;
  },
};

export default {
  tokens,
  post,
  get,
  put,
  del,
  patch,
  head,
  options,
};
