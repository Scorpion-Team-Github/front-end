import apiDefault from "./apiDefault";

export default {
  async login({ user, password }) {
    const request = { user, password, fcm_token: '' }
    const url = 'auth/login'
    return await apiDefault.post({ url, request, withToken: false })
  },
};
