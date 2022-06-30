import React, { useEffect } from "react";
import axios from "axios";

function Home() {
  const token = window.localStorage.getItem("token");

  const getData = async () => {
    try {
      const res1 = await axios.get("http://localhost:8080/api/test1", {
        headers: {
          Authorization: token,
        },
      });
      console.log("res1 ", res1);
    } catch (e) {
      console.error(e);
    }
    try {
      const res2 = await axios.get("http://localhost:8080/api/test2", {
        headers: {
          Authorization: token,
        },
      });
      console.log("res2 ", res2);
    } catch (e) {
      console.error(e);
    }
    try {
      const res3 = await axios.get("http://localhost:8080/api/test3", {
        headers: {
          Authorization: token,
        },
      });
      console.log("res3 ", res3);
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
