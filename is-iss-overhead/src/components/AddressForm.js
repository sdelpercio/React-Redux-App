import React, { useState } from 'react';
import { connect } from 'react-redux';
import { checkData, resetResult } from '../actions';
import './AddressForm.css';

const AddressForm = props => {
	const [addressInput, setAddressInput] = useState('');

	function removeSpaces(string) {
		return string.replace(/ /g, '+');
	}

	const handleChange = e => {
		setAddressInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		const adjustedAddress = removeSpaces(addressInput);
		props.checkData(adjustedAddress);

		setAddressInput('');
	};

	const handleReset = e => {
		e.preventDefault();
		props.resetResult();
	};

	return (
		<>
			<form className='Form' onSubmit={handleSubmit}>
				<input
					className='Address'
					type='text'
					name='address'
					id='address'
					value={addressInput}
					placeholder='enter your address'
					autoComplete='off'
					onChange={handleChange}
					required
				/>
				<button className='Submit' type='submit'>
					Go!
				</button>
				<button className='Reset' onClick={handleReset}>
					Reset
				</button>
			</form>
			<p className='Sample'>
				Sample Address:{' '}
				<span>1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA</span>
			</p>
		</>
	);
};

export default connect(null, { checkData, resetResult })(AddressForm);
