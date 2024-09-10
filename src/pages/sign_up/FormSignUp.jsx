import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Button from '../../components/Button';
import FormSignUpValidation from './FormSignUpValidation';
function FormSignUp() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(FormSignUpValidation),
	});

	const submitForm = () => {
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
				<div className="form__btn">
					<Button type="submit" className="btn__mg-top">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
}

export default FormSignUp;
