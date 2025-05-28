import styles from "./Todo.module.css";
import { useState, useRef, useEffect } from "react";
import { FaClipboardList, FaEdit } from "react-icons/fa";
// import { RiDeleteBack2Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
import DescriptionIcon from "@mui/icons-material/Description";

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
        <DescriptionIcon fontSize="medium" sx={{ color: "#b1770c" }} />
        {task.isEdiStyle ? <input ref={myRef} className={`${styles["todo__input"]}`} onChange={(e) => setInputText(e.target.value)} type="text" value={inputText} /> : <p>{task.text}</p>}
      </div>
      <Stack spacing={0.5} direction="row">
        <IconButton aria-label="delete" onClick={() => deleteTodo(task.id)}>
          <DeleteIcon color="error" fontSize="medium" />
        </IconButton>
        <IconButton onClick={() => editTodo(task, inputText)}>
          <ModeEditIcon sx={{ color: "#ffca14" }} fontSize="medium" />
        </IconButton>
        <IconButton onClick={() => completeTodo(task.id)}>
          <DoneIcon color="success" fontSize="medium" />
        </IconButton>
      </Stack>
    </div>
  );
}
