import http from "../http";
const baseUrl = `/user`;

export default {
  name: `user-module`,
  baseUrl,
  login: (data) => http.post(`${baseUrl}/login`, data, { cancelToken: http.tokens.get(`${baseUrl}/login`) }),
};
