import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  const token = window.localStorage.getItem("token");

  const getData = async () => {
    try {
      const res1 = await axios.get("http://localhost:8080/api/header", {
        headers: {
          userId: token,
        },
      });
      console.log("res1 ", res1);
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
