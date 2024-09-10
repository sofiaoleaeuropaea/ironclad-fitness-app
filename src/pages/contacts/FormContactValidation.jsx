import * as yup from 'yup';

const portugalPhoneValidator = (phoneNumber) => {
	const phoneRegex = /^(91|92|93|96)\d{7}$/;
	return phoneRegex.test(phoneNumber);
};

const FormContactValidation = yup.object().shape({
	fullName: yup.string().required('Full name is required'),
	email: yup.string().email('Provide a valid E-mail').required('E-mail is required'),
	phone: yup.string().test('portugal-phone', 'Invalid Portuguese phone-number', portugalPhoneValidator).required('Phone number is required'),
	message: yup.string().required('Message required'),
});

export default FormContactValidation;
