import styles from "./Form.module.css";
import { useState } from "react";

export default function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }
  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Create new Todo" value={inputValue} />
      <button type="sumbit">Add ToDo</button>
    </form>
  );
}
