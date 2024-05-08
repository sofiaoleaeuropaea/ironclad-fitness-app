import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Button from '../../components/Button';
import FormValidation from '../../components/FormValidation';

const FormContact = () => {
	// const [formData, setFormData] = useState(null);

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
		// setFormData(data);
		reset();
	};
	return (
		<div className="form">
			<p className="form__description">Shot us a message if you have questions</p>
			<form onSubmit={handleSubmit(submitForm)}>
				<input className="form__information" type="text" name="fullName" placeholder="Full name" {...register('fullName')} />
				{errors && errors.fullName && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.fullName.message}
					</p>
				)}
				<input className="form__information" type="email" name="email" placeholder="E-mail" {...register('email')} />
				{errors && errors.email && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.email.message}
					</p>
				)}
				<input className="form__information" type="text" name="phone" placeholder="Phone number" {...register('phone')} />
				{errors && errors.phone && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.phone.message}
					</p>
				)}
				<textarea className="form__information" name="message" placeholder="Message" {...register('message')}></textarea>
				{errors && errors.message && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.message.message}{' '}
					</p>
				)}

				<Button value="Submit" className="btn__mg-right" />
			</form>

			{/* {formData && (
			<div className="submittedData">
				<h2>Dados Enviados:</h2>
				<pre>{JSON.stringify(formData, null, 2)}</pre>
			</div>

	
		)} */}
		</div>
	);
};

export default FormContact;
