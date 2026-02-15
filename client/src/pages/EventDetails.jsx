import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [event, setEvent] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/events/${id}`);
        setEvent(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvent();
  }, [id]);

  const handleRegister = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `${API_URL}/api/register/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      alert("Successfully Registered");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="details-card">
      <h2>{event.name}</h2>

      <div className="details-content">
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Category:</strong> {event.category}</p>
      </div>

      {user ? (
        <button className="primary-btn" onClick={handleRegister}>
          Register
        </button>
      ) : (
        <button className="secondary-btn" onClick={() => navigate("/login")}>
          Login to Register
        </button>
      )}
    </div>
  );
};

export default EventDetails;
