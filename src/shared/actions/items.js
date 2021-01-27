
import axios from "axios"
import * as types from "../constants"
import * as util from '../util.js';
function getAllPlanets(data) {
  return {
    type: types.LOAD_PLANETS,
    data
  }
}
export function loadAllPlanets(stringSearch) {
  return dispatch => {
    let results = [];
    axios.get(util.planetsDevAPIURL + stringSearch).then(res => {
      if (res.data.results.length) {
        results = res.data.results;
      }
      dispatch(getAllPlanets({ data: results, isFetching: false, search: stringSearch }));
    })
  }
}
