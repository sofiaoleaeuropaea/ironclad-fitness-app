import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormValidation from './FormValidation';
import Buttons from '../../components/Buttons';

function FormContact() {
	const [formData, setFormData] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(FormValidation),
	});

	const submitForm = data => {
		console.log(data);
		setFormData(data);
		reset();
	};
return (
	<div className="Form">
		<form onSubmit={handleSubmit(submitForm)}>
			<label for="full_name">Name</label>
			<input type="text" id="full_name" name="fullName" placeholder="Enter your full name" {...register('fullName')} />
			{/* <p>{errors.firstName?.message || ' '}</p> */}
			<p> {errors && errors.fullName && errors.fullName.message} </p>
			<label for="email">E-mail</label>
			<input type="email" id="email" name="email" placeholder="Enter you e-mail" {...register('email')} />
			<p> {errors && errors.email && errors.email.message} </p>
			<label for="phone">Phone number</label>
			<input type="text" id="phone" name="phone" placeholder="Enter your phone number" {...register('phone')} />
			<p> {errors && errors.phone && errors.age.phone} </p>
			<label for="message">Message</label>
			<textarea id="message" name="message" placeholder="Write your message"></textarea>

			<input type="submit" value="Submit" />
		</form>

		{/* {formData && (
			<div className="submittedData">
				<h2>Dados Enviados:</h2>
				<pre>{JSON.stringify(formData, null, 2)}</pre>
			</div>

	
		)} */}
	</div>
);
}

export default FormContact;
