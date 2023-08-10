//renderizar cada una, solo guardo estilos 
function AddTask () {
    return (
        <div className="mt-8 w-full">
            <div className="flex justify-between items-center w-26 mb-1 bg-gray-700 p-2">
                <h2 className="text-xl font-bold mr-20">Task 1</h2>
                {/* line-through text-gray-500 estilos para cuando haga click en done */}
                <div className="space-x-2">
                    <button className="px-3 py-1 bg-green-500 text-white font-bold rounded-3xl outline-0">
                    <i className="fa-solid fa-circle-check" />
                    </button>
                    <button className="px-3 py-1 bg-red-500 text-white font-bold rounded-3xl">
                    <i className="fa-solid fa-trash" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTask