import TodoApi from "../../../services/todo-api";

export default {
  async getTodos({ state, commit }) {
    try {
      const data = await TodoApi.getTodos();
      commit("setTodos", data.data);
      state.isLoading = false;
    } catch (error) {
      state.error = error.message;
      state.isLoading = false;
    }
  },

  async getTodo({ state, commit }, id) {
    try {
      const data = await TodoApi.getTodo(id);
      state.todo = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = error.message;
      state.isLoading = false;
    }
  },
  async addTodo({ state, commit }, todo) {
    try {
      state.isLoading = true;
      const data = await TodoApi.createTodo(todo);
      state.todos.push(data.data);
      state.isLoading = false;
    } catch (error) {
      state.error = error.message;
      state.isLoading = false;
    }
  },
  async updateTodo({ state, commit }, todo) {
    try {
      state.isLoading = true;
      const data = await TodoApi.updateTodo(todo);
      state.todo = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = error.message;
      state.isLoading = false;
    }
  },
  async removeTodo({ state, commit }, id) {
    try {
      await TodoApi.removeTodo(id);
      state.isLoading = true;
      state.todos = state.todos.filter((item) => item.id !== id);
      state.isLoading = false;
    } catch (error) {
      state.error = error.message;
      state.isLoading = false;
    }
  },
};
