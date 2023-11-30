import { useContext } from "react";
import { TodosContext } from "../../contexts/todos";

function Todos() {
  const { todos, completeTask } =
    useContext(TodosContext);
  const list = todos.sort((a, b) => {
    return b.id - a.id;
  });

  return (
    <>
      <div className="w-full bg-gray-800 rounded-lg p-2 text-center flex-flex-col gap-6">
        <h1 className="text-2xl uppercase font-semibold tracking-wider py-4">
          Lista de tarefas({todos.length})
        </h1>
        <ul className="w-full gap-4 grid grid-cols-3">
          {todos.length
            ? list.map((todo) => (
                <li
                  key={todo.id}
                  className={todo.completed ? "col-span-1 flex flex-col bg-green-700 p-2 rounded-md items-start" : "col-span-1 flex flex-col bg-gray-700 p-2 rounded-md items-start"}
                >
                  <div className="w-full flex justify-between items-center font-semibold tracking-wider text-lg">
                    <span>
                      {todo.completed ? "Tarefa concluída" : todo.task}
                    </span>
                    <button
                      onClick={() => completeTask(todo.id)}
                      type="button"
                      className={todo.completed ? "p-2 bg-green-800 text-xs rounded" : "p-2 bg-blue-700 text-xs rounded"}
                    >
                     {todo.completed ? "DESFAZER" : "FEITO"}
                    </button>
                  </div>
                  <span className="text-xs">{todo.date}</span>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}

export default Todos;
