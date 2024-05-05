import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';
function FormSignUp() {
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
			<form onSubmit={handleSubmit(submitForm)}>
				<input className="form__information" type="text" name="fullName" placeholder="Full name" {...register('fullName')} />
				{errors && errors.fullName && (
					<p className="form__error">
						{' '}
						<MdOutlineErrorOutline /> {errors.fullName.message}
					</p>
				)}
				<input className="form__information" type="date" name="birthdate" placeholder="Date of birth" {...register('birthdate')} />
				{errors && errors.birthdate && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.birthdate.message}{' '}
					</p>
				)}
				<input className="form__information" type="email" name="email" placeholder="E-mail" {...register('email')} />
				{errors && errors.email && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.email.message}
					</p>
				)}{' '}
				<input className="form__information" type="tel" name="phone" placeholder="Phone number" {...register('phone')} />
				{errors && errors.phone && (
					<p className="form__error">
						{' '}
						<MdOutlineErrorOutline /> {errors.phone.message}{' '}
					</p>
				)}{' '}
				<Buttons value="Submit" className="btn__mg-right" />
			</form>
		</div>
	);
}

export default FormSignUp;
