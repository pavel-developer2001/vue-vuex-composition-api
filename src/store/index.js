import { createStore } from "vuex";
import { todoModule } from "./modules/todo/todo.module";

const store = createStore({
  modules: {
    todo: todoModule,
  },
});

export default store;
