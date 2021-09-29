import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./components/GetData";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input } from "./components/Input.styles";
import { Region } from "./components/Regions.styles";
import { define } from "./actions/DefRegion";

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

  const [cor, setCor] = useState("BR");
  const [visible, setVisible] = useState(false);

  const regions = [
    "BR",
    "NA",
    "EUW",
    "EUN",
    "KR",
    "JP",
    "RU",
    "OCE",
    "TR",
    "LAN",
  ];

  const regions2 = {
    BR: "br1",
    NA: "na1",
    EUW: "euw1",
    EUN: "eun1",
    KR: "kr",
    JP: "jp1",
    RU: "ru1",
    OCE: "oc1",
    TR: "tr1",
    LAN: "la1",
  };

  return (
    <div className="container">
      <div className="container_main">
        <div className="container_search">
          <div
            onBlur={() => {
              console.log("123");
            }}
            className="region_selector"
          >
            <Region onClick={() => setVisible(true)} cor={cor}>
              {cor}
            </Region>
            <div className="region_dropdown">
              {visible
                ? regions.map((p) => (
                    <Region
                      onClick={() => {
                        setCor(p);
                        setVisible(false);
                        dispatch(define(regions2[p]));
                      }}
                      cor={p}
                    >
                      {p}
                    </Region>
                  ))
                : null}
            </div>
          </div>
          <Input
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                handleClick();
              }
            }}
            onChange={onChange}
            placeholder="Pesquisar..."
          />
          <button
            className="button_search"
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
