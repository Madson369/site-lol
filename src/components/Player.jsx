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
  if (data && data.length > 1) {
    console.log(data[0].name, data[1][1].rank);
  }
  return (
    <div>
      {data && data.length > 1 ? (
        <div>
          {data[0].name}|{data[0].profileIconId}|{data[1][0].tier}|
          {data[1][0].rank}|{data[1][0].wins}|{data[1][0].losses}|
          <img
            src={"public/images/0.png"}
          ></img>
        </div>
      ) : null}
    </div>
  );
};

export default Player;
