import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0
    }
  },
  actions,
  getters,
  mutations
};
