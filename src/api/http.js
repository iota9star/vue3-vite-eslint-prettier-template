import axios from "axios";

const http = axios.create({
  timeout: 60 * 1000,
  withCredentials: true,
});

const catchError = (error) => {
  if (error && (error.status === 401 || (error.data || {}).code === 401)) {
    console.error(`认证失败...`);
  }
  return Promise.reject(error);
};

http.interceptors.request.use((config) => {
  return config;
}, catchError);

http.interceptors.response.use((resp) => {
  const data = resp.data || {};
  if (resp.status !== 200) {
    return catchError(resp);
  }
  return data;
}, catchError);

const post = (url, data, params) => {
  return http.post(url, data, { params });
};

const put = (url, data, params) => {
  return http.put(url, data, { params });
};

const get = (url, params) => {
  return http.get(url, { params });
};

const del = (url, config) => {
  return http.delete(url, config);
};

const patch = (url, data, params) => {
  return http.patch(url, data, { params });
};

export default {
  post,
  get,
  put,
  del,
  patch,
};
