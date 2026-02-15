import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>

      <button
        className="primary-btn"
        onClick={() => navigate(`/event/${event._id}`)}
      >
        View Details
      </button>
    </div>
  );
};

export default EventCard;
