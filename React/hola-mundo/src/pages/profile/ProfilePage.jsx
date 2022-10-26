import React from "react";
import { useNavigate } from "react-router-dom";
import GoToHome from "../../components/utils/GoToHome";

const ProfilePage = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>User profile</h1>
      <button onClick={() => navigate("/tasks")}>Tasks</button>
      <GoToHome />
    </div>
  );
};

export default ProfilePage;
