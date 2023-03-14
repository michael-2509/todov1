import { useRef, useContext } from "react";

import { TodosContext } from "../store/TodoContext";

import classes from "./NewForm.module.css";

const NewForm: React.FC = () => {
  //we have to reg what element we are tryna store in the in the ref objec and initialize it to null
  const todoTextRef = useRef<HTMLInputElement>(null);

  //get access to context object
  const todosCtx = useContext(TodosContext);

  // we add the type "React.FormEvent" to let typescript know that we are submitting an input
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //the exclamation after current is to let TS know that ref connection would always be established and successfull
    const enteredTodo = todoTextRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      //throw a new error
      return;
    }

    todosCtx.addTodo(enteredTodo);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">New Todo</label>
      <input id="text" ref={todoTextRef} />
      <button>Submit</button>
    </form>
  );
};

export default NewForm;
