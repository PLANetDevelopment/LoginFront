import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent, option) {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");

    if (option) {
      if (!userId) {
        navigate("/login");
      }
    }
  });
  return <SpecificComponent />;
}

export default Auth;
