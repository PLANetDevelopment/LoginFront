import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (option) {
      if (!token) {
        navigate("/login");
      }
    }
  }, []);
  return <SpecificComponent />;
}

export default Auth;
