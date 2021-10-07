import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRanks, getPlayerData } from "./GetData";
import { useState, useEffect } from "react";
import { clear } from "../actions/GetData.js";
import { define } from "../actions/DefRegion";
import { wipe } from "../actions/GetMatch";
import { useHistory } from "react-router-dom";
import { CalcTime } from "./CalcTime";
import { Skeleton } from "./Skeleton.styles";
import { EloColor } from "./Elo.styles";

const Player = () => {
  let { id } = useParams();
  const data = useSelector((state) => state.data);
  const region = useSelector((state) => state.region);
  const matches = useSelector((state) => state.match);
  const dispatch = useDispatch();
  const history = useHistory();
  let items = [];

  let sortedmatches = [];

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
    console.log(data);

    let matchids = matches[0];
    let sortmatches = matches.slice(1).sort((a, b) => {
      return b.info.gameCreation - a.info.gameCreation;
    });

    sortedmatches = [matchids, ...sortmatches];

    // matches.sort((a,b) => {
    //   if (a.info.gameCreation == undefined)
    //   {return a}
    //   if (b.info.gameCreation == undefined)
    //   {return b}
    //   return b.info.gameCreation - a.info.gameCreation
    // })
    // console.log(testadeira)
  }

  function handleClick(name) {
    dispatch(wipe());
    history.push(`/player/${name}`);
  }

  if (data && data.length == 2) {
    console.log(typeof data[1][1]);
  }

  return (
    <div className="container_content">
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
        ) : (
          <div className="skeleton_topo">
            <Skeleton width={"105px"} height={"105px"}></Skeleton>
            <Skeleton width={"220px"} height={"50px"}></Skeleton>
          </div>
        )}

        {[0, 1].map((w, index) => {
          return data && data.length == 2 && data[1].length !== 0 ? (
            <div className="player_rank">
              <div className="container_rank_img">
                {" "}
                <img
                  class="rank_img"
                  src={`${window.location.origin}/assets/ranked_emblems/${data[1][index].tier}.svg`}
                ></img>
              </div>
              <div className="player_rank_info">
                <div className="ranked_type">
                  {" "}
                  <span className="rank_queue_type">
                    {data[1][index].queueType == "RANKED_SOLO_5x5"
                      ? "Ranked Solo"
                      : "Ranked Flex"}
                  </span>
                </div>

                <EloColor color={data[1][index].tier}>
                  {data[1][index].tier} {data[1][index].rank}
                </EloColor>
                <span className>
                  {" "}
                  <span className="slash">/</span>{" "}
                  <span className="rank_lp">
                    {data[1][index].leaguePoints}
                    LP{" "}
                  </span>
                </span>
                <div className="ranked_data">
                  {" "}
                  <span className="rank_wr">
                    {" "}
                    {Math.round(
                      (data[1][index].wins /
                        (data[1][index].wins + data[1][index].losses)) *
                        100
                    )}
                    % WR{" "}
                    <span className="rank_games_number">
                      {data[1][index].wins + data[1][index].losses} Games
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="player_rank">
              <div className="container_rank_img">
                {" "}
                <img
                  class="rank_img"
                  src={`${window.location.origin}/assets/ranked_emblems/UNRANKED.svg`}
                ></img>
              </div>
              <div className="player_rank_info">
                <EloColor color="UNRANKED">UNRANKED</EloColor>
                <span className>
                  {" "}
                  <span className="slash">/</span>{" "}
                  <span className="rank_lp">0 LP </span>
                </span>
                <div className="ranked_data"> </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container_teste">
        <div className="matches_teste">
          {sortedmatches && sortedmatches.length == 11 ? (
            <div>
              {sortedmatches.map((p, index) =>
                index > 0 ? (
                  <div className="match_container">
                    {p.info.participants.map((w) => {
                      return w.summonerName == id ? (
                        <div className="to_sem_ideia">
                          <div className="game_info_overall">
                            <div className="game_info_container">
                              <span className="game_mode">
                                {p.info.gameMode}
                              </span>
                              <span className="game_creation">
                                {CalcTime(+new Date() - p.info.gameCreation)}
                              </span>
                              <span className="game_result">
                                {w.win ? (
                                  <span className="game_win">WIN</span>
                                ) : (
                                  <span className="game_loss">LOSS</span>
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="champion_face_container">
                            <img
                              className="champion_face"
                              alt="champ_icon"
                              src={`${window.location.origin}/assets/champion/${w.championName}.png`}
                            ></img>
                            <div className="spell_container">
                              <img
                                className="summoner_spell"
                                alt="=spell_icon"
                                src={`${window.location.origin}/assets/summoner_spells/${w.summoner1Id}.png`}
                              ></img>
                              <img
                                className="summoner_spell"
                                alt="spell_icon"
                                src={`${window.location.origin}/assets/summoner_spells/${w.summoner2Id}.png`}
                              ></img>
                            </div>
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
                                {w.item6 != 0 ? (
                                  <img
                                    className="item_icon_img"
                                    alt="item-icon"
                                    src={`${window.location.origin}/assets/item/${w.item6}.png`}
                                  ></img>
                                ) : (
                                  <div className="item_container"></div>
                                )}
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
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
              return (
                <div className="match_container">
                  <div className="skeleton_player_info">
                    <Skeleton
                      width={"50px"}
                      height={"10px"}
                      border={false}
                      margin={true}
                    ></Skeleton>
                    <Skeleton
                      width={"50px"}
                      height={"10px"}
                      border={false}
                      margin={true}
                    ></Skeleton>
                    <Skeleton
                      width={"50px"}
                      height={"10px"}
                      border={false}
                      margin={true}
                    ></Skeleton>
                  </div>
                  <div className="champion_face_container">
                    <Skeleton
                      width={"50px"}
                      height={"50px"}
                      border={false}
                      margin={false}
                    ></Skeleton>
                    <div className="spell_container">
                      <Skeleton
                        width={"25px"}
                        height={"25px"}
                        border={false}
                        margin={false}
                      ></Skeleton>
                      <Skeleton
                        width={"25px"}
                        height={"25px"}
                        border={false}
                        margin={false}
                      ></Skeleton>
                    </div>
                  </div>
                  <div className="kda_container">
                    <Skeleton
                      width={"50px"}
                      height={"10px"}
                      border={false}
                      margin={true}
                    ></Skeleton>
                    <Skeleton
                      width={"50px"}
                      height={"10px"}
                      border={false}
                      margin={true}
                    ></Skeleton>
                    <Skeleton
                      width={"50px"}
                      height={"10px"}
                      border={false}
                      margin={true}
                    ></Skeleton>
                  </div>
                  <div className="items_container">
                    <div className="item_overall">
                      <div className="item_teste">
                        {[1, 2, 3, 4, 5, 6].map(() => {
                          return (
                            <Skeleton
                              width={"27px"}
                              height={"27px"}
                              border={false}
                              margin={false}
                            ></Skeleton>
                          );
                        })}
                      </div>
                      <div className="trinket">
                        {" "}
                        <Skeleton
                          width={"27px"}
                          height={"27px"}
                          border={false}
                          margin={false}
                        ></Skeleton>
                      </div>
                    </div>
                  </div>

                  <div className="skeleton_teams_overall">
                    <div className="teams_container">
                      <div className="team_1">
                        {[1, 2, 3, 4, 5].map(() => {
                          return (
                            <Skeleton
                              width={"80px"}
                              height={"10px"}
                              border={false}
                              margin={true}
                            ></Skeleton>
                          );
                        })}
                      </div>
                      <div className="team_2">
                        {[1, 2, 3, 4, 5].map(() => {
                          return (
                            <Skeleton
                              width={"80px"}
                              height={"10px"}
                              border={false}
                              margin={true}
                            ></Skeleton>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Player;
