import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./GetData";
import { useState, useEffect } from "react";
import { clear } from "../actions/GetData.js";
import { define } from "../actions/DefRegion";
import { wipe } from "../actions/GetMatch";

const Player = () => {
  let { id } = useParams();
  const data = useSelector((state) => state.data);
  const region = useSelector((state) => state.region);
  const matches = useSelector((state) => state.match);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clear());
      // dispatch(define('br1'))
      dispatch(wipe());
    };
  }, []);

  useEffect(() => {
    getPlayerData(dispatch, id, region);
  }, []);

  console.log(matches);

  return (
    <div className="container_content">
      <div className="container_teste">
        <div className="container_profile">
          {data && data.length > 1 ? (
            <div className="player_info">
              <span className="player_bagulho">{data[0].name}</span>
              <div className="profile_img_container">
                <div className="level_header">{data[0].summonerLevel}</div>
                <div className="icon_border">
                  <img
                    className="profile_img"
                    alt="profile-icon"
                    src={`${window.location.origin}/assets/images/${data[0].profileIconId}.png`}
                  ></img>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="matches_teste">
          {matches && matches.length == 11 ? (
            <div>
              {matches.map((p, index) =>
                index > 0 ? (
                  <div className="match_container">
                    <div className="team_1">
                      {p.info.participants.map((w, index) => {
                        return index < 5 ? (
                          <div className="player">
                            {w.summonerName}
                            <img
                              className="champion_icon_img"
                              alt="champion-icon"
                              src={`${window.location.origin}/assets/champion/${w.championName}.png`}
                            ></img>
                          </div>
                        ) : null;
                      })}
                    </div>
                    <div className="team_2">
                      {p.info.participants.map((w, index) => {
                        return index >= 5 ? (
                          <div className="player">
                            {w.summonerName}
                            <img
                              className="champion_icon_img"
                              alt="champion-icon"
                              src={`${window.location.origin}/assets/champion/${w.championName}.png`}
                            ></img>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          ) : (
            <span>Deu Ruim</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
