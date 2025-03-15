import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Concert App</h1>
      <p>Find and manage concerts easily!</p>
      <Link to="/concerts">View Concerts</Link>
    </div>
  );
};

export default Home;
