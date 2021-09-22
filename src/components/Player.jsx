import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./GetData";
import { useState, useEffect } from "react";

const Player = () => {
  let { id } = useParams();
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    getPlayerData(dispatch, id);
  }, []);

  console.log(data);
  return <div>123</div>;
};

export default Player;
