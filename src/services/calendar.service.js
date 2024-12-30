// service to add events
export const AddEvents = (newEvent) => {
    const ExistingEvent = JSON.parse(localStorage.getItem("events") || "[]");
    ExistingEvent.push(newEvent);
    localStorage.setItem("events", JSON.stringify(ExistingEvent));
};
// service to get all events
export const GetEvents = () => {
    const AllEvents = localStorage.getItem("events") || "[]";
    return JSON.parse(AllEvents);
};
// services to delete the events
export const deleteEvent = (id) => {
    const allEvents = localStorage.getItem("events");
    if (allEvents) {
        const updatedEvents = JSON.parse(allEvents).filter((event) => event.id !== id);
        // Update localStorage with the filtered events
        localStorage.setItem("events", JSON.stringify(updatedEvents));
        return updatedEvents;
    }
    return [];
};
