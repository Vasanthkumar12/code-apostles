import { useContext } from "react";
import { ConclaveContext } from "../context/ConclaveContext";
import LeftSidebar from "../common/LeftSidebar"
import Navbar from "../common/Navbar";
import SubscribedEvents from "./SubscribedEvents";
import './Home.css'

const Home = () => {
    const { eventState, interestState, setFilter, filteredEvents } = useContext(ConclaveContext);

    if (eventState.loading || interestState.loading) return <p>Loading...</p>;
    if (eventState.error || interestState.error) return <p>Error loading data.</p>;

    return (
      <>
      <Navbar/>
        <div className="parent-container">
            {/* Left Sidebar */}
            <LeftSidebar/>

            {/* Events Section */}
            <div className="event-container">
                {filteredEvents.map((event) => (
                    <div className="event-cards" key={event.id}>
                        <img src={event.img} alt={event.title} />
                        <h4> {event.title}</h4>
                        <p>{event.description}</p>
                        <p><strong>People:</strong> {event.subscribed}</p>
                        <button>Enter</button>
                    </div>
                ))}
            </div>
        </div>
        <SubscribedEvents/>
        </>
    );

};


export default Home




