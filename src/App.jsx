import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <div className="App">
        <section className="w-full min-h-screen max-w-7xl m-auto bg-gray-900 text-gray-50 flex flex-col py-16 justify-center items-center font-mono">
          <h1 className="text-4xl font-semibold uppercase ">Minhas tarefas</h1>
          <div className="w-full max-w-6xl m-auto flex flex-col gap-10 ">
            <NewTodoForm />
            <Todos />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
