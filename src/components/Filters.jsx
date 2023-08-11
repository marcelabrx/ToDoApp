
function Filters ({ setFilters }) {
  const taskStatusChange = (e) => {
   const selectValue = e.target.value
    console.log(e.target.value)
  
    if (selectValue === '') {
      setFilters("")
    } else if (selectValue === 'complete') {
      setFilters(true)
    } else if (selectValue === 'incomplete') {
      setFilters(false)
    }
  }

  return (
      <div className="font-bold">
          Select
        <select
          name=""
          id=""
          onChange={taskStatusChange}
          className="lg:w-1/4 flex align-start p-2 mt-1 bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-900 font-bold rounded"
          >
              <option value="">All</option>
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
        </select>
      </div>
  )
}

export default Filters