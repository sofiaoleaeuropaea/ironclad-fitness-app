import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';


const FitnessEvaluation = () => {
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
			<>
				<section id="evaluation" className="evaluation">
					<div className="container">
						<div className="form form__bg-color">
							<form onSubmit={handleSubmit(submitForm)}>
								<input className="form__information" type="text" name="age" placeholder="Age" {...register('age')} />
								{errors && errors.age && (
									<p className="form__error">
										{' '}
										<MdOutlineErrorOutline /> {errors.age.message}
									</p>
								)}
								<input className="form__information" type="number" name="height" placeholder="Height" {...register('height')} />
								{errors && errors.height && (
									<p className="form__error">
										<MdOutlineErrorOutline /> {errors.height.message}{' '}
									</p>
								)}
								<input className="form__information" type="number" name="weight" placeholder="Weight" {...register('weight')} />
								{errors && errors.weight && (
									<p className="form__error">
										<MdOutlineErrorOutline /> {errors.weight.message}{' '}
									</p>
								)}
								<fieldset>
									<legend>Select your fitness goal:</legend>

									<div>
										<input type="radio" id="weight_reduction" name="fitness_goal" value="Weight reduction" checked />
										<label for="weight_reduction">Weight reduction</label>
									</div>

									<div>
										<input type="radio" id="muscle_gain" name="fitness_goal" value="Muscle gain" />
										<label for="muscle_gain">Muscle gain</label>
									</div>

									<div>
										<input type="radio" id="Hiper" name="drone" value="louie" />
										<label for="louie">Louie</label>
									</div>
								</fieldset>

								<Buttons value="Submit" className="btn__form" />
							</form>
						</div>
					</div>
				</section>
			</>
		);
};

export default FitnessEvaluation;
