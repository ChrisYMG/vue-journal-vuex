import { createStore } from "vuex";
import journal from "../modules/daybook/store/jurnal";

const store = createStore({
  modules: {
    journal,
  },
});
export default store;
