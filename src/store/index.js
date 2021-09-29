import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";

const key = `[__YOUR_PROJECT_NAME_VUEX_${(import.meta.env.VITE_ENV || `NOENV`).toUpperCase()}__]`;
const psOption = { key: key };
// Encryption only in the production environment
if (import.meta.env.PROD && import.meta.env.VITE_ENV === `production`) {
  const ls = new SecureLS({
    encodingType: `aes`,
    isCompression: true,
    encryptionNamespace: key,
  });
  psOption.storage = {
    getItem: (key) => ls.get(key),
    setItem: (key, value) => ls.set(key, value),
    removeItem: (key) => ls.remove(key),
  };
}

export default Vuex.createStore({
  plugins: [createPersistedState(psOption)],
  state: {},
  mutations: {},
  getters: {},
  modules: {},
});
