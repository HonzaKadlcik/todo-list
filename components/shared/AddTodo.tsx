import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create}>
        <Input
          name="input"
          type="text"
          placeholder="Začněte psaním sem."
        />
        <Button type="submit" text="Přidat"/>
    </Form>
  );
};

export default AddTodo;
