import * as yup from 'yup';

const portugalPhoneValidator = (phoneNumber) => {
	const phoneRegex = /^(?:\+?351)?9[1236]\d{7}$/;
	return phoneRegex.test(phoneNumber);
};

const formFitnessEvaluationValidation = yup.object().shape({
	weight: yup.number().typeError('Weight must be a number').min(1, 'Weight must be greater than 0').required('Weight is required'),
	height: yup.number().typeError('Height must be a number').min(1, 'Height must be greater than 0').required('Height is required'),
});
// const formContactValidation = yup.object().shape({
// 	fullName: yup.string().required('Full name is required'),
// 	email: yup.string().email('Provide a valid E-mail').required('E-mail is required'),
// 	phone: yup.string().test('portugal-phone', 'Invalid Portuguese phone-number', portugalPhoneValidator).required('Phone number is required'),
// 	message: yup.string().required('Message required'),
// });

const formSignUpValidation = yup.object().shape({
	fullName: yup.string().required('Full name is required'),
	birthdate: yup.string().required('Birthdate is required'),
	email: yup.string().email('Provide a valid E-mail').required('E-mail is required'),
	phone: yup.string().test('portugal-phone', 'Invalid Portuguese phone-number', portugalPhoneValidator).required('Phone number is required'),
});

const FormValidation = yup.object().shape({
	...formFitnessEvaluationValidation.fields,
	...formContactValidation.fields,
	...formSignUpValidation.fields,
});
export default FormValidation;
