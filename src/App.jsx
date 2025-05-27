import "./App.css";
import Form from "./components/Form";
import ListTodo from "./components/ListTodo";
import Buttons from "./components/Buttons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [listTodo, setListTodo] = useState([]);

  function addNewTodo(value) {
    setListTodo([
      ...listTodo,
      {
        text: value,
        id: uuidv4(),
        isCompleted: false,
        isEdiStyle: false,
      },
    ]);
  }

  function handleCompleteTodo(taskId) {
    const updateArr = listTodo.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setListTodo(updateArr.sort((a, b) => a.isCompleted - b.isCompleted));
  }

  function handleDeleteTodo(taskId) {
    setListTodo(listTodo.filter((todo) => todo.id !== taskId));
  }

  function handleEditTodo(task, updateText) {
    setListTodo(
      listTodo.map((todo) => {
        if (task.id === todo.id) {
          return { ...todo, isEdiStyle: !todo.isEdiStyle, text: updateText };
        }
        return todo;
      })
    );
  }

  function handleButtonTodo(attr) {
    const currentAttr = attr.dataset.action;
    switch (currentAttr) {
      case "resetCompletedTodo":
        setListTodo(listTodo.filter((todo) => !todo.isCompleted));
        break;
      case "deleteAllTodo":
        setListTodo([]);
        break;
      default:
        return;
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      <Form addTodo={addNewTodo} />
      {listTodo.length <= 0 && (
        <h1
          style={{
            marginTop: 100,
            fontSize: 40,
            color: "white",
          }}
        >
          {" "}
          Create your first ToDo!
        </h1>
      )}
      {listTodo.length > 0 && <Buttons buttonClick={handleButtonTodo} />}
      <ListTodo todos={listTodo} completeTodo={handleCompleteTodo} deleteTodo={handleDeleteTodo} editTodo={handleEditTodo} />
      {listTodo.length > 0 && (
        <p
          style={{
            fontSize: "25px",
            fontWeight: 600,
          }}
        >
          You have complited {listTodo.filter((todo) => todo.isCompleted).length} Todo!
        </p>
      )}
    </div>
  );
}

export default App;
