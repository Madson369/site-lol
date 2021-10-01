import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./GetData";
import { useState, useEffect } from "react";
import { clear } from "../actions/GetData.js";
import { define } from "../actions/DefRegion";
import { wipe } from "../actions/GetMatch";
import { useHistory } from "react-router-dom";

const Player = () => {
  let { id } = useParams();
  const data = useSelector((state) => state.data);
  const region = useSelector((state) => state.region);
  const matches = useSelector((state) => state.match);
  const dispatch = useDispatch();
  const history = useHistory();
  let items = [];

  useEffect(() => {
    return () => {
      dispatch(clear());
      // dispatch(define('br1'))
      dispatch(wipe());
    };
  }, []);

  // useEffect(() => {
  //   getPlayerData(dispatch, id, region);
  // }, []);

  useEffect(() => {
    getPlayerData(dispatch, id, region);
  }, [id]);

  if (matches.length == 11) {
    console.log(matches);
  }

  function handleClick(name) {
    history.push(`/player/${name}`);
  }

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
                    {p.info.participants.map((w) => {
                      return w.summonerName == id ? (
                        <div className="to_sem_ideia">
                          <div className="champion_face_container">
                            <img
                              className="champion_face"
                              alt="champ_icon"
                              src={`${window.location.origin}/assets/champion/${w.championName}.png`}
                            ></img>
                          </div>

                          <div className="kda_container">
                            <div>
                              <span className="kda">
                                {w.kills}
                                <span className="slash">/</span>
                                {w.deaths}
                                <span className="slash">/</span>
                                {w.assists}
                              </span>
                              <div className="kda_ratio">
                                {((w.kills + w.assists) / w.deaths).toFixed(2)}
                                KDA
                              </div>
                              <div className="cs">
                                {w.totalMinionsKilled}CS(
                                {(
                                  w.totalMinionsKilled /
                                  (p.info.gameDuration / 60000)
                                ).toFixed(1)}
                                )
                              </div>
                            </div>
                          </div>
                          <div className="items_container">
                            <div className="item_overall">
                              <div className="item_teste">
                                {[
                                  w.item0,
                                  w.item1,
                                  w.item2,
                                  w.item3,
                                  w.item4,
                                  w.item5,
                                ].map((i) => {
                                  return i != 0 ? (
                                    <div className="item_container">
                                      <img
                                        className="item_icon_img"
                                        alt="item-icon"
                                        src={`${window.location.origin}/assets/item/${i}.png`}
                                      ></img>
                                    </div>
                                  ) : (
                                    <div className="item_container"></div>
                                  );
                                })}
                              </div>
                              <div
                                className="item_container"
                                className="trinket"
                              >
                                <img
                                  className="item_icon_img"
                                  alt="item-icon"
                                  src={`${window.location.origin}/assets/item/${w.item6}.png`}
                                ></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : // fim aq
                      null;
                    })}

                    <div className="teams_overall">
                      <div className="teams_container">
                        <div className="team_1">
                          {p.info.participants.map((w, index) => {
                            return index < 5 ? (
                              <div className="player">
                                <span
                                  className="player_name"
                                  onClick={() => {
                                    handleClick(w.summonerName);
                                  }}
                                >
                                  {w.summonerName}
                                </span>
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
                                <span
                                  className="player_name"
                                  onClick={() => {
                                    handleClick(w.summonerName);
                                  }}
                                >
                                  {w.summonerName}
                                </span>
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
