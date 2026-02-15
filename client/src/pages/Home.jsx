import { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../components/EventCard";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${API_URL}/api/events?search=${search}&category=${category}`
        );
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchEvents();
  }, [search, category]);

  return (
    <div>
      <h2 className="page-title">Event Discovery</h2>

      <div className="filters">
        <input
          className="search-input"
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Marketing">Marketing</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      {loading && <p>Loading events...</p>}

      <div className="grid">
        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
