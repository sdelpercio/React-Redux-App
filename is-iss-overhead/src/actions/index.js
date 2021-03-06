import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_ISS = 'UPDATE_ISS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const SET_GOOGLE_ERROR = 'SET_GOOGLE_ERROR';
export const SET_ISS_ERROR = 'SET_ISS_ERROR';

export const TRUE_RESULT = 'TRUE_RESULT';
export const FALSE_RESULT = 'FALSE_RESULT';
export const RESET_RESULT = 'RESET_RESULT';

export const checkData = user_address => dispatch => {
	// tell reducer data is being fetched currently
	dispatch({ type: FETCH_DATA });
	// get data from iss, tell reducer
	axios
		.get('http://api.open-notify.org/iss-now.json')
		.then(res => {
			dispatch({ type: UPDATE_ISS, payload: res.data.iss_position });
		})
		.catch(err => dispatch({ type: SET_ISS_ERROR }));

	// get data from google geocoder, tell reducer
	axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${user_address}&key=AIzaSyBGXC2Gk3tmos1zwfgXT0G8eWGgerXjnGA`
		)
		.then(res => {
			console.log('googles response', res);
			dispatch({
				type: UPDATE_ADDRESS,
				payload: res.data.results[0].geometry.location
			});
		})
		.catch(err => dispatch({ type: SET_GOOGLE_ERROR }));
};

export const trueResult = () => {
	return { type: TRUE_RESULT };
};
export const falseResult = () => {
	return { type: FALSE_RESULT };
};
export const resetResult = () => {
	return { type: RESET_RESULT };
};
