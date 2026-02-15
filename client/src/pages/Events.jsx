import { useEffect, useState } from "react";
import API from "../services/api";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>All Events</h2>
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default Events;
