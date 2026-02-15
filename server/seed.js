const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Event = require("./models/Event");

dotenv.config();

const events = [
  {
    name: "Tech Conference 2026",
    organizer: "Bellcorp Tech",
    location: "Chennai",
    date: "2026-03-20",
    description: "Annual technology conference covering AI, Cloud, and DevOps.",
    capacity: 200,
    category: "Technology",
  },
  {
    name: "Startup Meetup",
    organizer: "Startup India",
    location: "Bangalore",
    date: "2026-04-15",
    description: "Networking event for startup founders and investors.",
    capacity: 150,
    category: "Business",
  },
  {
    name: "AI Workshop",
    organizer: "AI Labs",
    location: "Hyderabad",
    date: "2026-05-10",
    description: "Hands-on AI and Machine Learning workshop.",
    capacity: 100,
    category: "Technology",
  },
  {
    name: "Digital Marketing Summit",
    organizer: "MarketPro",
    location: "Mumbai",
    date: "2026-06-12",
    description: "Learn advanced digital marketing strategies.",
    capacity: 120,
    category: "Marketing",
  },
  {
    name: "Cyber Security Bootcamp",
    organizer: "SecureNet",
    location: "Delhi",
    date: "2026-07-18",
    description: "Intensive cybersecurity training session.",
    capacity: 80,
    category: "Technology",
  },
  {
    name: "Cloud Computing Expo",
    organizer: "CloudWorld",
    location: "Pune",
    date: "2026-08-05",
    description: "Explore AWS, Azure, and Google Cloud innovations.",
    capacity: 250,
    category: "Technology",
  },
  {
    name: "Women in Tech Forum",
    organizer: "TechWomen",
    location: "Chennai",
    date: "2026-09-14",
    description: "Empowering women leaders in technology.",
    capacity: 180,
    category: "Social",
  },
  {
    name: "Finance & Investment Seminar",
    organizer: "FinEdge",
    location: "Mumbai",
    date: "2026-10-20",
    description: "Understanding modern investment strategies.",
    capacity: 130,
    category: "Finance",
  },
  {
    name: "Data Science Conference",
    organizer: "DataPro",
    location: "Bangalore",
    date: "2026-11-25",
    description: "Deep dive into data analytics and visualization.",
    capacity: 220,
    category: "Technology",
  },
  {
    name: "HR Leadership Summit",
    organizer: "PeopleFirst",
    location: "Delhi",
    date: "2026-12-15",
    description: "Leadership trends in HR and talent acquisition.",
    capacity: 140,
    category: "Business",
  },
  {
    name: "Gaming Expo",
    organizer: "GameHub",
    location: "Hyderabad",
    date: "2026-04-08",
    description: "Latest trends in gaming and eSports.",
    capacity: 300,
    category: "Entertainment",
  },
  {
    name: "UI/UX Design Workshop",
    organizer: "DesignPro",
    location: "Pune",
    date: "2026-05-22",
    description: "Interactive workshop on modern UI/UX design principles.",
    capacity: 90,
    category: "Design",
  },
  {
    name: "Blockchain Summit",
    organizer: "CryptoWorld",
    location: "Chennai",
    date: "2026-06-30",
    description: "Blockchain innovations and Web3 trends.",
    capacity: 160,
    category: "Technology",
  },
  {
    name: "Health & Wellness Fair",
    organizer: "WellLife",
    location: "Coimbatore",
    date: "2026-07-25",
    description: "Focus on mental health and physical fitness.",
    capacity: 200,
    category: "Health",
  },
  {
    name: "Photography Masterclass",
    organizer: "LensCraft",
    location: "Goa",
    date: "2026-08-19",
    description: "Master advanced photography techniques.",
    capacity: 70,
    category: "Art",
  },
  {
    name: "Entrepreneurship Bootcamp",
    organizer: "InnovateX",
    location: "Bangalore",
    date: "2026-09-10",
    description: "Startup ideation to execution guidance.",
    capacity: 110,
    category: "Business",
  },
  {
    name: "Music Festival 2026",
    organizer: "LiveNation",
    location: "Mumbai",
    date: "2026-10-05",
    description: "Live music performances from top artists.",
    capacity: 500,
    category: "Entertainment",
  },
  {
    name: "Robotics Workshop",
    organizer: "RoboTech",
    location: "Hyderabad",
    date: "2026-11-11",
    description: "Hands-on robotics building and programming.",
    capacity: 95,
    category: "Technology",
  },
  {
    name: "Public Speaking Seminar",
    organizer: "SpeakUp",
    location: "Chennai",
    date: "2026-12-02",
    description: "Improve communication and presentation skills.",
    capacity: 85,
    category: "Education",
  },
  {
    name: "Green Energy Summit",
    organizer: "EcoPower",
    location: "Delhi",
    date: "2026-03-28",
    description: "Future of renewable energy and sustainability.",
    capacity: 210,
    category: "Environment",
  }
];


const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connected for Seeding");

    await Event.deleteMany();
    await Event.insertMany(events);

    console.log("Events Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
