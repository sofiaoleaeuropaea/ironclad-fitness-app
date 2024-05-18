import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Button from '../../components/Button';

import FormContactValidation from './FormContactValidation';

const FormContact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(FormContactValidation),
	});

	const submitForm = (data) => {
		console.log(data);
		window.alert(JSON.stringify(data, null, 2));
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

				<textarea className="form__information textarea__custom" name="message" placeholder="Message" maxLength={200} {...register('message')} />

				{errors && errors.message && (
					<p className="form__error">
						<MdOutlineErrorOutline /> {errors.message.message}{' '}
					</p>
				)}

				<div className="form__btn">
					<Button value="Submit" className="btn__mg-top" />
				</div>
			</form>
		</div>
	);
};

export default FormContact;
