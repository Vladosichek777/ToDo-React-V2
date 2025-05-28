// import styles from "./Form.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmitForm(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20vh",
        maxHeight: "50px",
        width: "35vw",
      }}
      autoComplete="off"
      onSubmit={handleSubmitForm}
    >
      <TextField
        size="normal"
        variant="filled"
        value={inputValue}
        label="Create new Todo"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        sx={{
          backgroundColor: "white",
          width: "70%",
        }}
      />
      <Button type="submit" variant="contained" size="large" color="success">
        Add ToDo
      </Button>
    </Box>
    // <form className={styles.form} onSubmit={handleSubmitForm}>

    //   {/* <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Create new Todo" value={inputValue} /> */}
    // </form>
  );
}
