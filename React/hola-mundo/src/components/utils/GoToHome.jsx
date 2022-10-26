import React from "react";
import { useNavigate } from "react-router-dom";

function GoToHome() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default GoToHome;
