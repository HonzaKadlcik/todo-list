import { todoStatus } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoType } from "@/components/shared/todoTypes";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button
        type="submit"
        text={todo.isCompleted === false ? "Nevyřízeno" : "Vyřízeno"}
      />
    </Form>
  );
};

export default ChangeTodo;
