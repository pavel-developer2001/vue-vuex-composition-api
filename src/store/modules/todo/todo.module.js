import actions from "./todo.actions";
import mutations from "./todo.mutations";

export const todoModule = {
  state: {
    todos: [],
    todo: {},
    error: "",
    isLoading: true,
  },
  mutations,
  actions,
  namespaced: true,
};
