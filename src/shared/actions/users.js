import axios from "axios"
import * as types from "../constants"
import * as util from '../util.js';
function getAllUsers(data) {
	return {
		type: types.LOAD_USER,
		data
	}
}
export function loadAllUser() {
	return dispatch => {
		axios.get(util.peopleDevAPIURL).then(res => {
			if (res.data.results.length) {
				dispatch(getAllUsers(res.data.results));
			}
		})
	}
}