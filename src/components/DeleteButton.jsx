
function DeleteButton ({getTasks, setGetTasks, id}) {
    const deleteTask = () => {
        const updateTasks = getTasks.filter((todo) => todo.id !== id)
        setGetTasks(updateTasks)
    }
    return (
        <button  onClick={deleteTask} className="px-3 py-1 bg-red-500 text-white font-bold rounded-3xl">
        <i className="fa-solid fa-trash" />
        </button>  
    )
}

export default DeleteButton