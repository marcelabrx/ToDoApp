import { useState } from "react"
import Form from "./Form"
import AddTask from "./AddTask"
function ContentTask () {
    const [getTasks, setGetTasks] = useState(() => {
        return localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
    })
    localStorage.setItem("task", JSON.stringify(getTasks))
    


    return (
        <div className="h-screen">
            <section className="text-white bg-gray-900 mx-20 p-8 flex flex-col justify-center items-center rounded-xl lg:w-1/2 lg:mx-auto">
                <h2 className="text-3xl flex items-center justify-center py-6 font-bold w-full">My ToDo's</h2>  
                <Form setGetTasks={setGetTasks}/> 
                {getTasks.map((todo) => {
                    return (
                        <AddTask
                        key={todo.id}
                        task={todo.name}
                        value={todo.value}
                        id={todo.id}
                        // setGetTasks={setGetTasks}
                        />
                    )
                })}
            </section>
        </div>
    )

}
export default ContentTask