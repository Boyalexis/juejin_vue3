import { createStore } from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';

// Create a new store instance.
export default createStore({
  state,
  actions,
  mutations
});
