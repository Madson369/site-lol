import axios from "axios";
import { receive, clear } from "../actions/GetData.js";

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

async function getPlayerData(dispatch, nick,region) {
  try {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nick}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response.data);
    dispatch(clear());
    dispatch(receive(response.data));
    const encryptedSummonerId = response.data.id;
    getPlayerDataFull(dispatch, encryptedSummonerId);
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

    console.log(response.data);

    dispatch(receive(response.data));
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getRanks, getPlayerData };
