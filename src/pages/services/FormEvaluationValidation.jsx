import * as yup from 'yup';

const FormEvaluationValidation = yup.object().shape({
	weight: yup.number().typeError('Weight must be a number').min(1, 'Weight must be greater than 0').required('Weight is required'),
	height: yup.number().typeError('Height must be a number').min(1, 'Height must be greater than 0').required('Height is required'),
});

export default FormEvaluationValidation;
