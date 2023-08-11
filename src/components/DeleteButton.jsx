import {FaTrashAlt} from "react-icons/fa"
function DeleteButton ({getTasks, setGetTasks, id}) {
    const deleteTask = () => {
        const updateTasks = getTasks.filter((todo) => todo.id !== id)
        setGetTasks(updateTasks)
    }
    return (
        <button  onClick={deleteTask} className="p-3 bg-red-500 text-white font-bold rounded-3xl">
        {/* <i className="fa-solid fa-trash" /> */}
        <FaTrashAlt className="m-auto text-md"/>
        </button>  
    )
}

export default DeleteButton