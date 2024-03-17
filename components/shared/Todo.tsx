import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/components/shared/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    textDecoration:
      todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div>
      <div className="flex TD-text">
        <p>{todo.title}</p>
      </div>
      <div className="flex">
        <ChangeTodo todo={todo} />
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
