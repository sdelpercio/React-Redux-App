import React from 'react';
import { connect } from 'react-redux';
import { trueResult, falseResult, resetResult } from '../actions';

const Result = props => {
	return (
		<>
			{!props.searched ? (
				<p>Enter in an address to see if the ISS is overhead!</p>
			) : (
				<div>
					{props.result ? (
						<p>
							<span>🔭</span>The ISS is within 100 km of you overhead!
							<span>🛰</span>
						</p>
					) : (
						<p>The ISS is not within 100 km of you</p>
					)}
				</div>
			)}
			{props.google_error && <p>{props.google_error}</p>}
			{props.iss_error && <p>{props.iss_error}</p>}
		</>
	);
};

const mapStateToProps = state => {
	return {
		isFetching: state.isFetching,
		searched: state.searched,
		user_latlong: state.user_latlong,
		google_error: state.google_error,
		iss_latlong: state.iss_latlong,
		iss_error: state.iss_error,
		result: state.result
	};
};

export default connect(mapStateToProps, {
	trueResult,
	falseResult,
	resetResult
})(Result);
