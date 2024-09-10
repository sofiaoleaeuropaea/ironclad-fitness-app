import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Button from '../../components/Button';

import FormContactValidation from './FormContactValidation';
import ScrollReveal from '../../components/ScrollReveal';

const ContactsForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(FormContactValidation),
	});

	const submitForm = (data) => {
	
		reset();
	};
	return (
		<>
			<section id="contact__form" className="contact__form">
				<div className="container ">
					<div className="contact-form__wrapper">
						<ScrollReveal>
							<h2>Let's talk</h2>
						</ScrollReveal>
						<ScrollReveal>
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
										<Button className="btn__mg-top" type="submit">
											Submit
										</Button>
									</div>
								</form>
							</div>
						</ScrollReveal>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactsForm;
