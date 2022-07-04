import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  const userId = window.localStorage.getItem("userId");

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/header", {
        headers: {
          userId: userId,
        },
      });
      console.log("res ", res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
}

export default Home;
