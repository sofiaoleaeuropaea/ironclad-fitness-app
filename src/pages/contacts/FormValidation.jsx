import * as yup from 'yup';
const FormValidation = yup.object().shape({
	fullName: yup.string().required('O primeiro nome é obrigatório'),
	email: yup.string().email('Insira um e-mail válido').required('O e-mail é obrigatório'),
	phone: yup
		.number()
		.typeError('A idade deve ser um número válido')
		.min(18, 'Tens de ser maior de idade')
		.max(65, 'Estás reformado, larga o computador e aproveita a vida!!!')
		.positive()
		.integer()
		.required('A idade é obrigatória'),
	password: yup.string().min(4, 'A senha deve ter pelo menos 4 caracteres').max(15, 'A senha deve ter no máximo 15 caracteres').required('A senha é obrigatória'),
});

export default FormValidation;
