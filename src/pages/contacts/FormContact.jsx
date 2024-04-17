import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Buttons from '../../components/Buttons';
import FormValidation from './FormValidation';

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

	const submitForm = (data) => {
		console.log(data);
		setFormData(data);
		reset();
	};
	return (
		<div className="form">
			<p className="form__description">Shot us a message if you have questions</p>
			<form onSubmit={handleSubmit(submitForm)}>
				<input className="form__information" type="text" name="fullName" placeholder="Full name" {...register('fullName')} />
				{/* <p>{errors.firstName?.message || ' '}</p> */}
				<p> {errors && errors.fullName && errors.fullName.message} </p>
				<input className="form__information" type="email" name="email" placeholder="E-mail" {...register('email')} />
				<p> {errors && errors.email && errors.email.message} </p>
				<input className="form__information" type="text" name="phone" placeholder="Phone number" {...register('phone')} />
				<p> {errors && errors.phone && errors.age.phone} </p>
				<textarea name="message" placeholder="Message"></textarea>
				<Buttons value="Submit" className="btn__form"/>
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
