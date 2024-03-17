"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/components/shared/todoTypes";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div>
      <Button
        onClick={handleEdit}
        text="Upravit"
      />

      {editTodo ? (
        <div className="TD-edit">
        <Form action={edit} onSubmit={handleSubmit}>
          <Input
            name="inputId"
            value={todo.id}
            type="hidden"
          />
          
            <Input
              type="text"
              name="newTitle"
              placeholder="Upravit Todo..."
            />

            <Button type="submit" text="Uložit" />
          
        </Form>
        </div>
      ) : null}
    </div>
  );
};

export default EditTodo;
