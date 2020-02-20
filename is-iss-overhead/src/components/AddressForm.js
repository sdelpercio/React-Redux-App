import React, { useState } from 'react';
import { connect } from 'react-redux';
import { checkData, resetResult } from '../actions';

const AddressForm = props => {
	const [addressInput, setAddressInput] = useState('');
	const [adjustedAddress, setAdjustedAddress] = useState('');

	function removeSpaces(string) {
		return string.replace(/ /g, '+');
	}

	const handleChange = e => {
		setAddressInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		setAdjustedAddress(removeSpaces(addressInput));
		props.checkData(adjustedAddress);

		setAddressInput('');
		setAdjustedAddress('');
	};

	const handleReset = e => {
		e.preventDefault();
		props.resetResult();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='address' />
				<input
					type='text'
					name='address'
					id='address'
					value={addressInput}
					placeholder='enter your address'
					onChange={handleChange}
					required
				/>
				<button type='submit'>Go!</button>
				<button onClick={handleReset}>Reset</button>
			</form>
			<p>
				Sample Address:{' '}
				<span>1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA</span>
			</p>
		</>
	);
};

export default connect(null, { checkData, resetResult })(AddressForm);
