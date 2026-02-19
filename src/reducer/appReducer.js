export const initialState = {
  tasks: [],
  theme: "light"
};

export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, completed: false }
        ]
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed)
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    default:
      return state;
  }
}
