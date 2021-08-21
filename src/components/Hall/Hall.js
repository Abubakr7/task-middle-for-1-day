import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Hall.module.css";
import { blueColor, redColor } from "./hallSlice.js";

function Hall() {
  const color = useSelector(({ hall }) => hall.color);
  const date = useSelector(({ home }) => home.date);

  const dispatch = useDispatch();

  useEffect(() => {
    if (date.getSeconds() % 4 === 0) {
      dispatch(redColor());
    } else {
      dispatch(blueColor());
    }
  }, [date, dispatch]);

  return (
    <div className={style[color]}>
      <h1>Hall Component</h1>
    </div>
  );
}

export default Hall;
