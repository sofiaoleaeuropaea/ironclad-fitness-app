import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';
import { bmiDescription } from '../../data';

const FitnessEvaluation = () => {
	const [heightValue, setHeightValue] = useState('');
	const [weightValue, setWeightValue] = useState('');
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

	// const bmiDescription = [
	// 	{
	// 		scale: 'Underweight',
	// 		description:
	// 			'Being underweight may indicate insufficient body fat and muscle mass relative to height, potentially leading to health risks such as weakened immune function, nutrient deficiencies, and osteoporosis.',
	// 	},
	// 	{
	// 		scale: 'Normal weight',
	// 		description:
	// 			'Falling within the normal weight category generally suggests a balanced body composition relative to height, which is associated with reduced risk of chronic diseases and overall good health.',
	// 	},
	// 	{
	// 		scale: 'Overweight',
	// 		description:
	// 			'Obesity is characterized by excess body fat accumulation, which can lead to various health problems including heart disease, type 2 diabetes, stroke, and certain cancers. It is often associated with lifestyle factors such as poor diet and lack of physical activity.',
	// 	},
	// 	{
	// 		scale: 'Obese',
	// 		description:
	// 			'Being overweight indicates a higher-than-ideal amount of body fat relative to height, which can increase the risk of developing health issues such as hypertension, high cholesterol, and joint problems. However, it may not carry the same health risks as obesity and can often be managed through lifestyle changes like diet and exercise.',
	// 	},
	// ];

	const calculateBmi = () => {
		const heightInMeters = heightValue / 100;
		const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
		setBmiValue(bmi);

		let bmiInterpretation = {};

		if (bmi < 18.5) {
			bmiInterpretation = bmiDescription[0];
		} else if (bmi >= 18.5 && bmi < 25) {
			bmiInterpretation = bmiDescription[1];
		} else if (bmi >= 25 && bmi < 30) {
			bmiInterpretation = bmiDescription[2];
		} else {
			bmiInterpretation = bmiDescription[3];
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

					<div className="bmi__wrapper">
						<h2>Your BMI result</h2>
						<p>{bmiValue}</p>
						<p>
							Result: <span className="bmi__message">{bmiInterpretation.scale}</span>
						</p>
						<p>{bmiInterpretation.description}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default FitnessEvaluation;
