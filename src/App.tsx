import React from "react";
import NewForm from "./components/NewForm";
import Todos from "./components/Todos";
import TodoContextProvider from "./store/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <Todos />
      <NewForm />
    </TodoContextProvider>
  );
}

export default App;
