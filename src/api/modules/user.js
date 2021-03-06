import http from "../http";

import { createApiModule } from "../utils";

export default createApiModule({
  name: `用户信息相关模块`,
  moduleName: `user`,
  baseUrl: ``,
  login: (data) => http.post(`${this.baseUrl}`, data),
});
