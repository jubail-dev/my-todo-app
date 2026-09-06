import type { TodosType } from "../types/type";
import Todo from "./Todo";

export interface TodosProps {
    props: TodosType[]
}

const Todos = ({ props }: TodosProps) => {

    console.log(props);
    
    return (
        <>
            <section>
                {
                    props.map(todo => <Todo todo={todo} key={todo.id}></Todo>)
                }
            </section>
        </>
    )
}

export default Todos;