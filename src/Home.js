import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./components/GetData";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

require("dotenv").config();

function Home() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // const API_KEY = process.env.REACT_APP_API_KEY;
  const history = useHistory();

  useEffect(() => {
    if (data) {
      //console.log(recebido);
      console.log(data);
    }
  }, [data]);

  const [evento, setEvento] = useState("");
  function onChange(event) {
    //console.log(event.target.value);
    setEvento(event.target.value);
    //
    //
  }

  function handleClick() {
    history.push(`/player/${evento}`);
  }
  return (
    <div>
      <div className="container_main">
        <div className="container_search">
          <input
            className="input_search"
            onChange={onChange}
            placeholder="Pesquisar..."
          />
          <button
            className="button_search"
            // onClick={() => {
            //   if (evento && evento !== "") {
            //     getPlayerData(dispatch, evento);
            //   }
            // }}
            onClick={() => {
              handleClick();
            }}
          >
            .GG
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
