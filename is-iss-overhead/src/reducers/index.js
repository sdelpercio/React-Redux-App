import {
	FETCH_DATA,
	UPDATE_ISS,
	UPDATE_ADDRESS,
	SET_GOOGLE_ERROR,
	SET_ISS_ERROR,
	TRUE_RESULT,
	FALSE_RESULT,
	RESET_RESULT
} from '../actions';

export const initialState = {
	isFetching: false,
	searched: false,

	user_latlong: {},
	google_error: false,

	iss_latlong: {},
	iss_error: false,

	result: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				isFetching: true,
				searched: true,
				user_latlong: {},
				google_error: false,
				iss_latlong: {},
				iss_error: false,
				result: false
			};
		case UPDATE_ISS:
			return {
				...state,
				iss_latlong: action.payload,
				isFetching: false
			};
		case SET_ISS_ERROR:
			return {
				...state,
				iss_error: true,
				isFetching: false,
				searched: false
			};
		case UPDATE_ADDRESS:
			return {
				...state,
				user_latlong: action.payload,
				isFetching: false
			};
		case SET_GOOGLE_ERROR:
			return {
				...state,
				google_error: true,
				isFetching: false,
				searched: false
			};
		case TRUE_RESULT:
			return {
				...state,
				result: true
			};
		case FALSE_RESULT:
			return {
				...state,
				result: false
			};
		case RESET_RESULT:
			return {
				...state,
				isFetching: false,
				searched: false,
				user_latlong: {},
				google_error: false,
				iss_latlong: {},
				iss_error: false,
				result: false
			};
		default:
			return state;
	}
};
