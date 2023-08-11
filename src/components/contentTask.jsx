import { useState } from "react"
import Form from "./Form"
import AddTask from "./AddTask"

function ContentTask () {
    const [getTasks, setGetTasks] = useState(() => {
        return localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
    })
    localStorage.setItem("task", JSON.stringify(getTasks))
    
    const [filters, setFilters] = useState("")
    console.log(filters)

    const taskFiltered = getTasks.filter((todo) => {
        if (filters === "") {
            return true
        } else {
            // return todo.status === filters
            return todo.value = filters
        }
    })

    // const taskFiltered = getTasks.filter((todo) => {
    //     if (filters === "all") {
    //         return true;
    //     } else if (filters === "complete") {
    //         return todo.value === "complete";
    //     } else if (filters === "incomplete") {
    //         return todo.value === "incomplete";
    //     }
    //     return false;
    // })
    console.log(taskFiltered)
    const handleDoneButton = (taskId) => {
        const statusTask = getTasks.map((todo) =>
        todo.id === taskId
        // ? { ...todo, status: todo.value === true ? false : true }
        ? { ...todo, value: todo.value === "complete" ? "incomplete" : "complete" }
        : todo
        )
        localStorage.setItem("task", JSON.stringify(statusTask))
        setGetTasks(statusTask)
    }

    return (
        <div className="h-screen">
            <section className="text-white bg-gray-900 mx-20 p-8 flex flex-col justify-center items-center rounded-xl lg:w-1/2 lg:mx-auto">
                <h2 className="text-3xl flex items-center justify-center py-6 font-bold w-full">My ToDo's</h2>  
                <Form setGetTasks={setGetTasks} filters={filters} setFilters={setFilters}/> 
                {/* cambie el getTAsks por taskFiltered */}
                {taskFiltered.map((todo) => {
                    return (
                        <AddTask
                        key={todo.id}
                        task={todo.name}
                        // status={todo.status}
                        value={todo.value}
                        id={todo.id}
                        getTasks={getTasks}
                        setGetTasks={setGetTasks}
                        handleDoneButton={handleDoneButton}
                        />
                    )
                })}
            </section>
        </div>
    )

}
export default ContentTask