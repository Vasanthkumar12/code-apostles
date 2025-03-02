import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { FETCH_SUCCESS, FETCH_ERROR, SET_FILTER, SET_CURRENT_USER } from "../reducer/actions";
import { FetchReducer, initialState } from "../reducer/FetchReducer";

export const ConclaveContext = createContext();

const ConclaveContextProvider = ({ children }) => {
    const [eventState, eventDispatch] = useReducer(FetchReducer, initialState);
    const [interestState, interestDispatch] = useReducer(FetchReducer, initialState);
    const [groupState, groupDispatch] = useReducer(FetchReducer, initialState);
    const [userState, userDispatch] = useReducer(FetchReducer, {
        ...initialState,
        currentUserId: "user001" // Default to first user for demo
    });

    // Fetch Events
    const fetchEvents = async () => {
        try {
            const response = await axios.get(
                "https://conclave-525c4-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
            );
            eventDispatch({ type: FETCH_SUCCESS, payload: response.data });
        } catch (error) {
            eventDispatch({ type: FETCH_ERROR, payload: error.message });
        }
    };

    // Fetch Interests
    const fetchInterests = async () => {
        try {
            const response = await axios.get(
                "https://conclave-525c4-default-rtdb.asia-southeast1.firebasedatabase.app/interests.json"
            );
            interestDispatch({ type: FETCH_SUCCESS, payload: response.data });
        } catch (error) {
            interestDispatch({ type: FETCH_ERROR, payload: error.message });
        }
    };

    // Fetch Groups
    const fetchGroups = async () => {
        try {
            const response = await axios.get(
                "https://conclave-525c4-default-rtdb.asia-southeast1.firebasedatabase.app/groups.json"
            );
            groupDispatch({ type: FETCH_SUCCESS, payload: response.data });
        } catch (error) {
            groupDispatch({ type: FETCH_ERROR, payload: error.message });
        }
    };

    // Fetch Users
    const fetchUsers = async () => {
        try {
            const response = await axios.get(
                "https://conclave-525c4-default-rtdb.asia-southeast1.firebasedatabase.app/users.json"
            );
            userDispatch({ type: FETCH_SUCCESS, payload: response.data });
        } catch (error) {
            userDispatch({ type: FETCH_ERROR, payload: error.message });
        }
    };

    useEffect(() => {
        fetchEvents();
        fetchInterests();
        fetchGroups();
        fetchUsers();
    }, []);

    // Set Filter
    const setFilter = (interest) => {
        eventDispatch({ type: SET_FILTER, payload: interest });
        groupDispatch({ type: SET_FILTER, payload: interest });
    };

    // Set Current User (for login functionality)
    const setCurrentUser = (userId) => {
        userDispatch({ type: SET_CURRENT_USER, payload: userId });
    };

    // Subscribe to an event
    const subscribeToEvent = async (eventId) => {
        if (!userState.currentUserId) return;
        
        try {
            const currentUser = userState.post[userState.currentUserId];
            const updatedSubscriptions = [...(currentUser.events_subscribed || []), eventId];
            
            // Update user's subscriptions
            await axios.patch(
                `https://conclave-525c4-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userState.currentUserId}.json`,
                { events_subscribed: updatedSubscriptions }
            );
            
            // Refetch users to update state
            fetchUsers();
            
        } catch (error) {
            console.error("Error subscribing to event:", error);
        }
    };

    // Filtered Events
    const filteredEvents =
        eventState.selectedInterest === "All"
            ? eventState.post
            : eventState.post?.filter((event) => event.category === eventState.selectedInterest);

    // Filtered Groups
    const filteredGroups =
        groupState.selectedInterest === "All"
            ? groupState.post
            : groupState.post?.filter((group) => group.category === groupState.selectedInterest);

    const value = {
        eventState,
        interestState,
        groupState,
        userState,
        fetchEvents,
        fetchInterests,
        fetchGroups,
        fetchUsers,
        setFilter,
        setCurrentUser,
        subscribeToEvent,
        filteredEvents,
        filteredGroups
    };

    return (
        <ConclaveContext.Provider value={value}>
            {children}
        </ConclaveContext.Provider>
    );
};

export default ConclaveContextProvider;