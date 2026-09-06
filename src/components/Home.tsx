import type { TodosType } from "../types/type";

const Home = () => {

    const dummyTodos: TodosType[] = [
        {
            id: 1,
            title: "Todo title 1",
            desc : "Todo1 description is here"
        }
    ]
    
    return (
        <div>
            <h1 className="text-3xl">Home</h1>
        </div>
    )
}

export default Home;