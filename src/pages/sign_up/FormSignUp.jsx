import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Button from '../../components/Button';
import FormSignUpValidation from './FormSignUpValidation';
function FormSignUp() {
	// const [formData, setFormData] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(FormSignUpValidation),
	});

	const submitForm = (data) => {
		console.log(data);
		window.alert(JSON.stringify(data, null, 2));
		reset();
	};
	return (
		<div className="form" id="form-signup">
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
				<Button value="Submit" className="btn__mg-right btn__mg-top" />
			</form>
		</div>
	);
}

export default FormSignUp;
