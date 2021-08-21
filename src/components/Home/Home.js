import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "./homeSlice.js";

function Home() {
  const dispatch = useDispatch();
  const date = useSelector(({ home }) => home.date);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(update());
    }, 1 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div>
      <h1>Home Component</h1>
      <h2>Timer: {moment(date).format("HH:mm:ss")}</h2>
    </div>
  );
}

export default Home;
