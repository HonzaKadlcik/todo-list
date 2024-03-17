import { PrismaClient } from "@prisma/client";
import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";

const prisma = new PrismaClient();
async function getData() {
  const data = await prisma.todo.findMany({});
  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="NP">
        <AddTodo />
        <div className="NP-TD">
          {data.map((todo, id) => (
            <div key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
