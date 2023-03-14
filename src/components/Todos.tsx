import React, { useContext } from "react";

import { TodosContext } from "../store/TodoContext";

import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          text={item.text}
          //bind is a method is a method that allows us configure a
          //function for future execution
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
