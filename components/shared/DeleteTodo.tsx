import { deleteTodo } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import { todoType } from "@/components/shared/todoTypes";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <Button
        text="Vymazat"
        type="submit"
      />
    </Form>
  );
};

export default DeleteTodo;
