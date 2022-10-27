import React from "react";
import { useNavigate } from "react-router-dom";
import AsyncExample from "../../components/pure/AsyncExample";
import DashBoard from "../dashboard/DashBoard";

function HomePage() {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Home Page</h1>
      <h2><DashBoard/></h2>
      <button onClick={() => navigate("/profile")}>Go to profile</button>

    </div>
  );
}

export default HomePage;
