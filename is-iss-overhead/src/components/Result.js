import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { trueResult, falseResult, resetResult } from '../actions';

const Result = props => {
	// recalculate result
	useEffect(
		props => {
			const lat1 = props.user_latlong.lat;
			const lng1 = props.user_latlong.lng;
			const lat2 = props.iss_latlong.latitude;
			const lng2 = props.iss_latlong.longitude;

			// converter
			function deg2rad(deg) {
				return deg * (Math.PI / 180);
			}

			function getDistanceBetween(lat1, lng1, lat2, lng2) {
				var R = 6371; // radius of earth in km
				var dLat = deg2rad(lat2 - lat1); // converting degrees to radians
				var dLng = deg2rad(lng2 - lng1);
				var a =
					Math.sin(dLat / 2) * Math.sin(dLat / 2) +
					Math.cos(deg2rad(lat1)) *
						Math.cos(deg2rad(lat2)) *
						Math.sin(dLng / 2) *
						Math.sin(dLng / 2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				var d = R * c;
				return d;
			}

			const isIssOverhead = () => {
				if (getDistanceBetween(lat1, lng1, lat2, lng2) < 100) {
					props.trueResult();
				} else {
					props.falseResult();
				}
			};
			isIssOverhead();
		},
		[props.isFetching]
	);

	return (
		<>
			{props.searched && (
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
	falseResult
})(Result);
