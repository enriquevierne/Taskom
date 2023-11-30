import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/todos";

function NewTodoForm() {
  const [task, setTask] = useState("");
  const { saveNewTodo } = useContext(TodosContext);

  function handleSaveNewTask(e) {
    e.preventDefault();

    saveNewTodo(task);
    setTask("");
  }

  return (
    <form onSubmit={handleSaveNewTask} className="w-fit m-auto p-4 shadow-lg rounded-lg bg-gray-800 flex gap-4">
      <input
        type="text"
        placeholder="Example: Studying"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        className="p-2 rounded text-blue-900 font-bold"
      />

      <button type="submit" className="p-2 px-4 rounded bg-blue-700">+</button>
    </form>
  );
}

export default NewTodoForm;
