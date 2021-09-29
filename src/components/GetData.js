import axios from "axios";
import { receive, clear } from "../actions/GetData.js";
import { collect } from "../actions/GetMatch.js";

async function getRanks(dispatch) {
  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response.data);

    const sorted = response.data.entries.sort((a, b) => {
      return b.leaguePoints - a.leaguePoints;
    });

    dispatch(clear());
    dispatch(receive(sorted));
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getPlayerData(dispatch, nick, region) {
  try {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nick}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    //console.log(response.data);
    dispatch(clear());
    dispatch(receive(response.data));
    console.log(response.data)
    const encryptedSummonerId = response.data.id;
    const puuid = response.data.puuid;
    //console.log(puuid);
    getPlayerDataFull(dispatch, encryptedSummonerId);
    getMatchId(dispatch, puuid, region);
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getPlayerDataFull(dispatch, encryptedSummonerId) {
  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    //console.log(response.data);

    dispatch(receive(response.data));
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getMatchId(dispatch, puuid, region) {
  let regions = {
    br1: "americas",
    na1: "americas",
    euw1: "europe",
    eun1: "europe",
    kr: "asia",
    jp1: "asia",
    ru1: "europe",
    oc1: "americas",
    tr1: "europe",
    la1: "americas",
  };
  try {
    const response = await axios.get(
      `https://${regions[region]}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch(collect(response.data));
    response.data.map((p) => getMatchData(dispatch, p, regions[region]));
    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getMatchData(dispatch, matchId, region) {
  try {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    //console.log(response.data);

    dispatch(collect(response.data));
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getRanks, getPlayerData };
