import { useContext } from "react";
import { ConclaveContext } from "../context/ConclaveContext";

const LeftSidebar = () => {
  const {filteredEvents, interestState, setFilter} = useContext(ConclaveContext)
  return (
    
    <div className="sort-container">
    <h3>Filter by Interest</h3>
    <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        {Object.entries(interestState.post).map(([key, interest]) => (
            <option key={key} value={interest.name}>
                {interest.name}
            </option>
        ))}
    </select>
</div>
  )
}

export default LeftSidebar