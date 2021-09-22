import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./GetData";
import { useState, useEffect } from "react";
import { clear } from "../actions/GetData.js";

const Player = () => {
  let { id } = useParams();
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clear());
    };
  }, []);

  useEffect(() => {
    getPlayerData(dispatch, id);
  }, []);

  console.log(data);

  return (
    <div>
      {data && data.length > 1 ? (
        <div>
          {data[0].name}|{data[0].profileIconId}||
          <img
            src={`${window.location.origin}/assets/images/${data[0].profileIconId}.png`}
          ></img>
        </div>
      ) : null}
    </div>
  );
};

export default Player;
