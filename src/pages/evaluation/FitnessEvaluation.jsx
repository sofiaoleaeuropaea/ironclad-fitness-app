import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';
import { bmiDescription, trainingPlans } from '../../data';

const FitnessEvaluation = () => {
	const [heightValue, setHeightValue] = useState('');
	const [weightValue, setWeightValue] = useState('');
	const [bmiValue, setBmiValue] = useState(0);
	const [bmiInterpretation, setBmiInterpretation] = useState('');
	const [fitnessPlan, setFitnessPlan] = useState('');

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

		let bmiInterpretation = {};
		let fitnessPlan = {};
		if (bmi < 18.5) {
			bmiInterpretation = bmiDescription[0];
			fitnessPlan = trainingPlans[0];
		} else if (bmi >= 18.5 && bmi < 25) {
			bmiInterpretation = bmiDescription[1];
			fitnessPlan = trainingPlans[1];
		} else if (bmi >= 25 && bmi < 30) {
			bmiInterpretation = bmiDescription[2];
			fitnessPlan = trainingPlans[2];
		} else {
			bmiInterpretation = bmiDescription[3];
			fitnessPlan = trainingPlans[3];
		}
		setBmiInterpretation(bmiInterpretation);
		setFitnessPlan(fitnessPlan);
	};

	console.log(fitnessPlan.exercises);

	return (
		<>
			<section id="evaluation" className="evaluation">
				<div className="container">
					<div className="evaluation__wrapper">
						<div className="form form__bg-color" id="fitness_evaluation_form">
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
											<input type="radio" id="weight_reduction" name="weight_reduction" value="Weight reduction" defaultChecked />
											Weight reduction
										</label>
									</div>

									<div>
										<label>
											<input type="radio" id="muscle_gain" name="muscle_gain" value="Muscle gain" />
											Increase strength
										</label>
									</div>

									<div>
										<label>
											<input type="radio" id="hipertrophy" name="hipertrophy" value="Hipertrophy" />
											Hipertrophy
										</label>
									</div>
								</div>

								<Buttons value="Submit" className="btn__form" />
							</form>
						</div>

						<div className="bmi__wrapper" id="bmi_info">
							<h2>Your BMI result</h2>
							<p>{bmiValue}</p>
							<p>
								You are <span className="bmi__message">{bmiInterpretation.scale}</span>.
							</p>
							<p>{bmiInterpretation.description}</p>
						</div>
						{fitnessPlan && (
							<div className="fitness-plan__wrapper" id="fitness_plan_exercises">
								<h3>Fitness Plan</h3>
								<p>{fitnessPlan.description}</p>
								<h4>Exercises</h4>
								<ul>
									{fitnessPlan.exercises.map((exercise, index) => (
										<li key={index}>
											{exercise.name} ({exercise.repetitions})
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default FitnessEvaluation;
