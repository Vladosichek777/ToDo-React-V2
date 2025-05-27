import Todo from "./Todo";
export default function ListTodo({ todos, completeTodo,deleteTodo,editTodo }) {
  return (
    <div
      style={{
        paddingTop: "10px",
      }}
    >
      {todos.map((task) => (
        <Todo task={task} key={task.id} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
      ))}
    </div>
  );
}
