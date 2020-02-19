import React, { useState } from 'react';
import { connect } from 'react-redux';
import { checkData } from '../actions';

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
		props.checkData();

		setAddressInput('');
		setAdjustedAddress('');
	};

	return (
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
		</form>
	);
};

export default connect(null, { checkData })(AddressForm);
