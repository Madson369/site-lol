import axios from "axios";
import { receive } from "../actions/GetData.js";



async function getData(dispatch) {
  try {
    const response = await axios.get(
      `https://br1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${process.env.REACT_APP_API_KEY}`
    );

    console.log(response.data);

    const sorted = response.data.entries.sort((a, b) => {
      return b.leaguePoints - a.leaguePoints;
    });

    dispatch(receive(sorted));
    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getData };
