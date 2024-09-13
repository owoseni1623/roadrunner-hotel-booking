import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle logout logic here
    navigate("/");
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;