import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';

const FormContact = () => {
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
		setFormData(data);
		reset();
	};
	return (
		<div className="form">
			<p className="form__description">Shot us a message if you have questions</p>
			<form onSubmit={handleSubmit(submitForm)}>
				<input className="form__information" type="text" name="fullName" placeholder="Full name" {...register('fullName')} />
				<p> {errors && errors.fullName && errors.fullName.message} </p>
				<input className="form__information" type="email" name="email" placeholder="E-mail" {...register('email')} />
				<p> {errors && errors.email && errors.email.message} </p>
				<input className="form__information" type="text" name="phone" placeholder="Phone number" {...register('phone')} />
				<p> {errors && errors.phone && errors.phone.message} </p>
				<textarea className="form__information" name="message" placeholder="Message" {...register('message')}></textarea>
				<p> {errors && errors.message && errors.message.message} </p>

				<Buttons value="Submit" className="btn__form" />
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
