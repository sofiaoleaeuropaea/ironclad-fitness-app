import * as yup from 'yup';
const portugalPhoneValidator = (phoneNumber) => {
	const phoneRegex = /^(?:\+?351)?9[1236]\d{7}$/;
	return phoneRegex.test(phoneNumber);
};
const FormValidation = yup.object().shape({
	fullName: yup.string().required('Full name is required'),
	birthdate: yup
		.date()
		.max(new Date(), 'Provide a valid birthdate')
		.required('Birthdate is required')
		.test('valid-birthdate', 'Provide a valid birthdate', (birthdate) => {
			const minDate = new Date();
			minDate.setFullYear(minDate.getFullYear() - 130);
			return birthdate && birthdate <= new Date() && birthdate >= minDate;
		}),
	email: yup.string().email('Provide a valid E-mail').required('E-mail is required'),
	phone: yup.string().test('portugal-phone', 'Invalid Portuguese phone-number', portugalPhoneValidator).required('Phone number is required'),
	message: yup.string().required('Message required'),
});

export default FormValidation;
