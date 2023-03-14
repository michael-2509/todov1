import React, { useState } from "react";
import Todo from "../models/todo";

//type is used to create a object alias
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

//create an initial context state
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [newTodo, setNewTodo] = useState<Todo[]>([]);

  const addNewTodoHandler = (todoText: string) => {
    //class instantiation
    const newTodo = new Todo(todoText);

    //state update
    setNewTodo((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setNewTodo((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: newTodo,
    addTodo: addNewTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
