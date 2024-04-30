import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';

const FitnessEvaluation = () => {
	const [heightValue, setHeightValue] = useState("");
	const [weightValue, setWeightValue] = useState("");
	const [bmiValue, setBmiValue] = useState('');
	const [bmiInterpretation, setBmiInterpretation] = useState('');

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

	const calculateBmi = () => {
		const heightInMeters = heightValue / 100;
		const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
		setBmiValue(bmi);

		let bmiInterpretation = '';

		if (bmi < 18.5) {
			bmiInterpretation = 'Underweight';
		} else if (bmi >= 18.5 && bmi < 25) {
			bmiInterpretation = 'Normal weight';
		} else if (bmi >= 25 && bmi < 30) {
			bmiInterpretation = 'Overweight';
		} else {
			bmiInterpretation = 'Obese';
		}
		setBmiInterpretation(bmiInterpretation);
	};

	return (
		<>
			<section id="evaluation" className="evaluation">
				<div className="container">
					<div className="form form__bg-transparent">
						<form onSubmit={handleSubmit(submitForm, calculateBmi)}>
							<input
								className="form__information"
								type="number"
								name="height"
								placeholder="Height (cm)"
								id="height"
								value={heightValue}
								onChange={(e) => setHeightValue(e.target.value)}
								// {...register('height')}
							/>
							{/* {errors && errors.height && (
								<p className="form__error">
									<MdOutlineErrorOutline /> {errors.height.message}{' '}
								</p>
							)} */}
							<input
								className="form__information"
								type="number"
								name="weight"
								placeholder="Weight (kg)"
								id="weight"
								value={weightValue}
								onChange={(e) => setWeightValue(e.target.value)}
								// {...register('weight')}
							/>
							{/* {errors && errors.weight && (
								<p className="form__error">
									<MdOutlineErrorOutline /> {errors.weight.message}{' '}
								</p>
							)} */}

							<div className="form__selector">
								<legend>Select your fitness goal:</legend>

								<div>
									<label>
										<input type="radio" id="weight_reduction" name="fitness_goal" value="Weight reduction" defaultChecked />
										Weight reduction
									</label>
								</div>

								<div>
									<label>
										<input type="radio" id="muscle_gain" name="fitness_goal" value="Muscle gain" />
										Increase strength
									</label>
								</div>

								<div>
									<label>
										<input type="radio" id="hipertrophy" name="fitness_goal" value="Hipertrophy" />
										Hipertrophy
									</label>
								</div>
							</div>

							<Buttons value="Submit" className="btn__form" />
						</form>
					</div>
					{bmiValue && bmiInterpretation && (
						<div className="result">
							<p>
								Your BMI: <span className="bmi-value">{bmiValue}</span>
							</p>
							<p>
								Result: <span className="bmi-message">{bmiInterpretation}</span>
							</p>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default FitnessEvaluation;
