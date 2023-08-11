import {useState} from "react"
import {FaCheckCircle} from "react-icons/fa"
import DeleteButton from "./DeleteButton"

function AddTask ({id,task, handleDoneButton, value, getTasks, setGetTasks}) {

    const [done, setDone] = useState(value === "complete")

    const toggleCompleted = () => {
        setDone(!done);
        handleDoneButton(id)
    }

    return (
        <div id={id} className="w-full">
            <div className="flex justify-between items-center w-26 mb-1 bg-gray-700 p-2">
                <h2 className={`"text-md font-bold mr-20 text-white" ${done ? "line-through text-gray-800" : "text-md font-bold mr-20 text-white"}`}>{task}</h2>
                
                <div className="space-x-2">
                    <button onClick={toggleCompleted} className={`"p-3 bg-green-500 text-white font-bold rounded-3xl outline-0" ${done ? "bg-gray-800 p-3 text-white font-bold rounded-3xl outline-0" : "p-3 bg-green-500 text-white font-bold rounded-3xl outline-0"}`}>
                        <FaCheckCircle className="text-lg font-extrabold"/>
                    </button>
                    <DeleteButton id={id} getTasks={getTasks} setGetTasks={setGetTasks}/>
                </div>
            </div>
        </div>
    )
}

export default AddTask