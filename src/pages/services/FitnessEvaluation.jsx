import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { PDFDownloadLink } from '@react-pdf/renderer';

import WomanRunning from '../../assets/woman_running.jpg';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Heading from '../../components/Heading';
import Button from '../../components/Button';
import FormEvaluationValidation from './FormEvaluationValidation';
import { bmiDescription, trainingPlans } from '../../data';
import ButtonSave from '../../components/ButtonSave';
import ExerciseDB from './ExerciseDB';
import ScrollReveal from '../../components/ScrollReveal';
import WorkoutPlanDownload from './WorkoutPlanDownload';

const FitnessEvaluation = () => {
	const [selectedFitnessGoal, setSelectedFitnessGoal] = useState('weight_reduction');
	const [heightValue, setHeightValue] = useState('');
	const [weightValue, setWeightValue] = useState('');
	const [bmiValue, setBmiValue] = useState(0);
	const [bmiInterpretation, setBmiInterpretation] = useState('');
	const [fitnessPlan, setFitnessPlan] = useState('');

	const handleRadioChange = (value) => {
		setSelectedFitnessGoal(value);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(FormEvaluationValidation),
	});

	const submitForm = (data) => {
		console.log('submited');
		console.log(data, errors, reset());
		calculateBmi(data);
	};

	const handleReset = () => {
		console.log('reset');
		reset();
		setHeightValue('');
		setWeightValue('');
		setBmiValue(0);
		setBmiInterpretation('');
		setFitnessPlan('');
		setSelectedFitnessGoal('weight_reduction');
	};

	const calculateBmi = () => {
		const heightInMeters = heightValue / 100;
		const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
		setBmiValue(bmi);

		const bmiRanges = [
			{ min: 0, max: 18.5, interpretationIndex: 0 },
			{ min: 18.5, max: 25, interpretationIndex: 1 },
			{ min: 25, max: 30, interpretationIndex: 2 },
			{ min: 30, max: Infinity, interpretationIndex: 3 },
		];

		const bmiIndex = bmiRanges.findIndex((range) => bmi >= range.min && bmi < range.max);

		let fitnessPlanIndex;
		switch (selectedFitnessGoal) {
			case 'weight_reduction':
				fitnessPlanIndex = bmiIndex * 3;
				break;
			case 'muscle_gain':
				fitnessPlanIndex = bmiIndex * 3 + 1;
				break;
			case 'hipertrophy':
				fitnessPlanIndex = bmiIndex * 3 + 2;
				break;
			default:
				{
				}

				break;
		}

		const bmiInterpretation = bmiDescription[bmiRanges[bmiIndex].interpretationIndex];
		const fitnessPlan = trainingPlans[fitnessPlanIndex];

		setBmiInterpretation(bmiInterpretation);
		setFitnessPlan(fitnessPlan);
	};

	return (
		<>
			<section id="evaluation" className="evaluation">
				<Heading
					title="Fitness evaluation"
					paragraph="We're dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. With our BMI calculator, you can gain insights into your body composition and make informed decisions about your fitness journey. Whether you're looking to shed pounds, gain muscle, or improve your overall well-being, here, you can have access to personalized fitness plans are tailored to meet your unique needs."
				/>

				<div className="container">
					<ScrollReveal>
						<div className="form__wrapper">
							<img src={WomanRunning} alt="Woman running" className="img-fluid" />
							<div className="form form__evaluation">
								<ScrollReveal>
									<p className="form__description">Enter your data for BMI calculation and a personalized fitness plan.</p>
									<form onSubmit={handleSubmit(submitForm)}>
										<input
											className="form__information"
											type="text"
											name="height"
											placeholder="Height (cm)"
											id="height"
											value={heightValue}
											onInput={(e) => {
												const val = e.target.value;
												if (val === ' ' || isNaN(val) || val === '0') return;
												setHeightValue(val);
											}}
											{...register('height')}
										/>
										{errors && errors.height && (
											<p className="form__error">
												<MdOutlineErrorOutline /> {errors.height.message}{' '}
											</p>
										)}
										<input
											className="form__information"
											type="text"
											name="weight"
											placeholder="Weight (kg)"
											id="weight"
											value={weightValue}
											onInput={(e) => {
												const val = e.target.value;
												if (val === ' ' || isNaN(val) || val === '0') return;
												setWeightValue(val);
											}}
											{...register('weight')}
										/>
										{errors && errors.weight && (
											<p className="form__error">
												<MdOutlineErrorOutline /> {errors.weight.message}{' '}
											</p>
										)}

										<div className="form__selector">
											<legend>Select your fitness goal:</legend>

											<div>
												<label className="radio-button">
													<input
														type="radio"
														id="weight_reduction"
														name="fitness_goal"
														value="weight_reduction"
														checked={selectedFitnessGoal === 'weight_reduction'}
														onChange={() => handleRadioChange('weight_reduction')}
													/>
													<div className="radio-circle"></div>
													<span className="radio-label">Weight reduction</span>
												</label>

												<label className="radio-button">
													<input
														type="radio"
														id="muscle_gain"
														name="fitness_goal"
														value="muscle_gain"
														checked={selectedFitnessGoal === 'muscle_gain'}
														onChange={() => handleRadioChange('muscle_gain')}
													/>
													<div className="radio-circle"></div>
													<span className="radio-label">Muscle gain</span>
												</label>

												<label className="radio-button">
													<input
														type="radio"
														id="hipertrophy"
														name="fitness_goal"
														value="hipertrophy"
														checked={selectedFitnessGoal === 'hipertrophy'}
														onChange={() => handleRadioChange('hipertrophy')}
													/>
													<div className="radio-circle"></div>
													<span className="radio-label">Hipertrophy</span>
												</label>
											</div>
										</div>
										<div className="form__btn">
											<Button type="submit">Submit</Button>
											<Button type="reset" onClick={handleReset}>
												Reset
											</Button>
										</div>
									</form>
								</ScrollReveal>
							</div>
						</div>

						<div className="form-output__wrapper">
							<div className="bmi__wrapper">
								<ScrollReveal>
									<h3>BMI Result</h3>
									{!fitnessPlan && (
										<>
											<p>
												BMI, or Body Mass Index, is a simple tool that helps gauge your body fat based on your height and weight. It gives you an idea of whether you're at a healthy weight for your
												height. It's a handy way to track your fitness journey and make informed choices about your health.
											</p>
										</>
									)}
									{fitnessPlan && (
										<>
											<div className="bmi-value">
												<p className={bmiInterpretation.classname}>{bmiValue}</p>
												<span className={bmiInterpretation.classname}>{bmiInterpretation.scale}</span>
											</div>
											<p>{bmiInterpretation.description}</p>
										</>
									)}
								</ScrollReveal>
							</div>
							<div className="fitness-plan__wrapper">
								<ScrollReveal>
									<h3>Workout Plan</h3>
									{!fitnessPlan && (
										<>
											<p className="fitness-plan__description">
												Get ready for a personalized fitness journey tailored just for you! We'll use your BMI along with your fitness goals to craft a plan designed to help you succeed. Let's reach
												those goals together!
											</p>
										</>
									)}
									{fitnessPlan && (
										<>
											<p className="fitness-plan__description">{fitnessPlan.description}</p>

											<div>
												<h4>Ready to workout?</h4>
												<ul>
													{fitnessPlan.exercises.map((exercise, index) => (
														<li key={index} className="workout-exercise__wrapper">
															<figure className="workout-exercise__img">
																<img src={exercise.img} alt={exercise.name} id={exercise.id} />
															</figure>
															<div>
																<p>{exercise.name}</p>
																<p className="small-text-size">{exercise.repetitions}</p>
															</div>
														</li>
													))}
												</ul>
											</div>
											<PDFDownloadLink document={<WorkoutPlanDownload fitnessPlan={fitnessPlan} />} fileName="Ironclad_workout_plan.pdf">
												{({ loading }) => (loading ? 'Generating PDF...' : <ButtonSave className="btn-save__mg-top__mobile" />)}
											</PDFDownloadLink>
										</>
									)}
								</ScrollReveal>
							</div>
						</div>
					</ScrollReveal>
				</div>
			</section>
			{/* <ExerciseDB /> */}
		</>
	);
};

export default FitnessEvaluation;
