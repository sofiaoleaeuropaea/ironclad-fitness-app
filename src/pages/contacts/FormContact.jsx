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
			<input type="text" name="fullName" placeholder="Enter your full name" {...register('fullName')} />
			{/* <p>{errors.firstName?.message || ' '}</p> */}
			<p> {errors && errors.fullName && errors.fullName.message} </p>

			<input type="email" name="email" placeholder="Enter you e-mail" {...register('email')} />
			<p> {errors && errors.email && errors.email.message} </p>

			<input type="text" name="phone" placeholder="Enter your phone number" {...register('phone')} />
			<p> {errors && errors.phone && errors.age.phone} </p>

			<Buttons>Submit</Buttons>
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
