export default {
  login(context) {
    context.commit('setLoginState', { value: true });
  },
  logout(context) {
    context.commit('setLoginState', { value: false });
  }
};
