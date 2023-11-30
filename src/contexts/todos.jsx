import { createContext, useEffect, useState } from "react";
import moment from "moment";
export const TodosContext = createContext({});

function TodosProvider({ children }) {
  const tasksLocalStorage = localStorage.getItem("@TASKS");
  const [todos, setTodos] = useState(
    tasksLocalStorage ? JSON.parse(tasksLocalStorage) : []
  );

  function saveNewTodo(task) {
    const today = moment().format("hh:mm");
    if (!task) return;

    const newTodo = {
      id: todos.length + 1,
      task: task,
      completed: false,
      date: today,
    };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
  }

  useEffect(() => {
    localStorage.setItem("@TASKS", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  function completeTask(id) {
    const filteredTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(filteredTodos);
  }

  return (
    <TodosContext.Provider
      value={{ todos, saveNewTodo, completeTask }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
