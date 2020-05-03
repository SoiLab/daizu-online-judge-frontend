import axios from "axios";
import { fetching, receiveRankings } from "./actions";
import mock from "../../../mocks/$mock";

const rankingsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveRankings(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default rankingsOprations;