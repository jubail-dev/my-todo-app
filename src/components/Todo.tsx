import type { TodosType } from "../types/type";

export interface TodoProps {
    todo: TodosType
}

const Todo = ({ todo }: TodoProps) => {

    const {id,title,desc} = todo
    
    return (
        <>

            <article>

                <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>

            </article>
        
        </>
    )
}

export default Todo;