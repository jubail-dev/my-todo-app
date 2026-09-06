import type { TodosType } from "../types/type";
import Todos from "./Todos";

const Home = () => {

    const dummyTodos: TodosType[] = [
        {
            id: 1,
            title: "Todo title 1",
            desc : "Todo1 description is here"
        },
        {
            id: 1,
            title: "Todo title 1",
            desc : "Todo1 description is here"
        }
    ]
    
    return (
        <>
            <Todos toDos={dummyTodos}></Todos>
        </>
    )
}

export default Home;