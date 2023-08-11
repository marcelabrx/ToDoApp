import { useState } from "react"
import { IoIosWarning } from "react-icons/io"
import Filters from "./Filters"

function Form ({setGetTasks, setFilters}) {
    const [task, setTask] = useState('')
    const [isTaskEmpty, setIsTaskEmpty] = useState(false)
    
    const inputChange = (event) => {
        setTask(event.target.value)
        if (isTaskEmpty) {
            setIsTaskEmpty(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (task.trim() !=""){
            const newTask = {
                id: crypto.randomUUID(),
                value: "incomplete", 
                description: task.trim() 
            }
            setGetTasks((prevTasks) => [...prevTasks, newTask])
            setTask("")
        } else {
            setIsTaskEmpty(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full mb-8">
            <section className="bg-gray-700 p-4 w-full">
                <section className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:items-center lg:justify-between">
                    <input
                    type="text"
                    value={task}
                    onChange={inputChange}
                    className="text-black lg:w-3/4 px-2 py-1 border outline-0 caret-pink-500  rounded lg:py-2 lg:pr-6 lg:mr-4"
                    placeholder="Enter a task"
                    />
                    <button className="lg:w-1/4 px-4 py-2 bg-blue-500 text-white rounded">
                    Add Task
                    </button>
                </section>
                {isTaskEmpty && (
                    <p className="flex mt-2 text-red-500 font-bold">
                        <IoIosWarning className="mr-2 mt-1" />Complete this field.
                    </p>
                )}
            </section>
            <Filters setFilters={setFilters}/>
        </form>
    )
}

export default Form