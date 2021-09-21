import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { receive } from "./actions/GetData";
import { getData } from "./components/GetData";
import React, { useState, useEffect } from "react";
require("dotenv").config();

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const API = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (data) {
      //console.log(recebido);
      console.log(data);
    }
  }, [data]);

  // const getRank = () => {
  //   if (data) {
  //     data.map((p) => {
  //       let listrank = data[0].entries
  //       let testaria = listrank.sort((a, b) => {
  //         return b.leaguePoints - a.leaguePoints;
  //       });
  //       console.log(testaria)
  //       return testaria ;
  //     });
  //   }
  // };

  return (
    <div>
      teste teste teste
      <button
        onClick={() => {
          getData(dispatch);
        }}
      >
        testaPERIGOSOEM
      </button>
      {/* <button onClick={() => {
        getRank()
      }}>SortPorRank</button> */}
    </div>
  );
}

export default App;
