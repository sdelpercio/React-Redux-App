import React, { useState } from 'react';

const AddressForm = () => {
	const [addressInput, setAddressInput] = useState('');

	const handleChange = e => {
		setAddressInput(e.target.value);
	};

	return (
		<form>
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
export default AddressForm;
