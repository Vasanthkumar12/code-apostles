

import { useContext } from "react";
import { ConclaveContext } from "../context/ConclaveContext";
import LeftSidebar from "../common/LeftSidebar";
import Navbar from "../common/Navbar";
import JoinedGroups from "./JoinedGroups";
import '../styles/Group.css'

const Group = () => {
    const { groupState, interestState, filteredGroups } = useContext(ConclaveContext);
    
    if (groupState.loading || interestState.loading) return <p>Loading...</p>;
    if (groupState.error || interestState.error) return <p>Error loading data.</p>;
    
    return (
        <div id="group">
        <Navbar/>
        <div className="parent-container">
            <LeftSidebar />

            <div className="group-container">
                {filteredGroups?.map((group) => (
                    <div className="group-cards" key={group.id}>
                        <img src={group.img} alt={group.name} />
                        <h4>{group.name}</h4>
                        <p>{group.description}</p>
                        <p><strong>Members: </strong>{group.members}</p>
                        <button>Join</button>
                    </div>
                ))}
            </div>
            <JoinedGroups/>
        </div>
        </div>
    );
};

export default Group;