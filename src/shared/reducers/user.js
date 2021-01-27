import {
	LOAD_USER
} from "../constants"

const user = (state = {
	allUser: []
}, action) => {
	switch (action.type) {
		case LOAD_USER:
			return Object.assign({}, state, { allUser: action.data })
		default:
			return state
	}
}

export default user