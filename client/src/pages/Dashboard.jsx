import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/api/register`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setRegistrations(res.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    if (user) fetchData();
  }, [user]);

  const today = new Date();

  const upcoming = registrations.filter(
    (r) => new Date(r.event.date) > today
  );

  const past = registrations.filter(
    (r) => new Date(r.event.date) < today
  );

  return (
    <div>
      <h2 className="page-title">My Registrations</h2>

      {loading && <p>Loading your registrations...</p>}

      {/* Upcoming Section */}
      <div className="section">
        <h3>Upcoming Events</h3>

        {upcoming.length === 0 ? (
          <p className="empty-text">No Upcoming Events</p>
        ) : (
          <div className="grid">
            {upcoming.map((r) => (
              <div className="event-card" key={r._id}>
                <h4>{r.event.name}</h4>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(r.event.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Location:</strong> {r.event.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past Section */}
      <div className="section">
        <h3>Past Events</h3>

        {past.length === 0 ? (
          <p className="empty-text">No Past Events</p>
        ) : (
          <div className="grid">
            {past.map((r) => (
              <div className="event-card" key={r._id}>
                <h4>{r.event.name}</h4>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(r.event.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Location:</strong> {r.event.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
