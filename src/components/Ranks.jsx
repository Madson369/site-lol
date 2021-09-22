import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./GetData";
import { useState, useEffect } from "react";


const Ranks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getRanks(dispatch);
  }, []);

  return <div>aaa</div>;
};

export default Ranks;
