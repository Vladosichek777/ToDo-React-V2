import styles from "./Todo.module.css";
import { useState, useRef, useEffect } from "react";
import { FaClipboardList, FaEdit } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";
import { MdDelete, MdDone } from "react-icons/md";

export default function Todo({ task, completeTodo, deleteTodo, editTodo }) {
  const [inputText, setInputText] = useState(task.text);
  const myRef = useRef(null);

  useEffect(() => {
    if (task.isEdiStyle && myRef.current) {
      myRef.current.focus();
    }
  }, [task.isEdiStyle]);
  return (
    <div className={`${task.isCompleted && styles["todo--done"]} ${styles.todo}`}>
      <div className={styles["todo__left"]}>
        <FaClipboardList className={`${styles["todo__icons"]} ${styles["todo__icons--list"]}`} />
        {task.isEdiStyle ? <input ref={myRef} className={`${styles["todo__input"]}`} onChange={(e) => setInputText(e.target.value)} type="text" value={inputText} /> : <p>{task.text}</p>}
      </div>
      <div className={styles["todo__right"]}>
        <RiDeleteBack2Line onClick={() => deleteTodo(task.id)} className={`${styles["todo__icons"]} ${styles["todo__icons--delete"]}`} />
        <FaEdit
          onClick={() => {
            editTodo(task, inputText);
          }}
          className={`${styles["todo__icons"]} ${styles["todo__icons--edit"]}`}
        />
        <MdDone onClick={() => completeTodo(task.id)} className={`${styles["todo__icons"]} ${styles["todo__icons--done"]}`} />
      </div>
    </div>
  );
}
