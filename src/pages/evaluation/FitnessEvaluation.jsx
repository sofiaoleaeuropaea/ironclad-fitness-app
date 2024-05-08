import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Heading from '../../components/Heading';
import Button from '../../components/Button';
import FormValidation from '../../components/FormValidation';
import { bmiDescription, trainingPlans } from '../../data';
import ButtonSave from '../../components/ButtonSave';

const FitnessEvaluation = () => {
	const [selectedFitnessGoal, setSelectedFitnessGoal] = useState('weight_reduction');
	const [heightValue, setHeightValue] = useState('');
	const [weightValue, setWeightValue] = useState('');
	const [bmiValue, setBmiValue] = useState(0);
	const [bmiInterpretation, setBmiInterpretation] = useState('');
	const [fitnessPlan, setFitnessPlan] = useState('');

	const fitnessPlanRef = useRef(null);

	const handleRadioChange = (value) => {
		setSelectedFitnessGoal(value);
	};

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

	const handleDownloadPDF = async () => {
		try {
			const canvas = await html2canvas(fitnessPlanRef.current);
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF({
				orientation: 'landscape',
			});
			pdf.addImage(imgData, 'PNG', 0, 0);
			pdf.save('ironclad-fitness-plan.pdf');
		} catch (error) {
			console.error('Error generating PDF:', error);
		}
	};

	return (
		<>
			<section id="evaluation" className="evaluation">
				<Heading
					title="Fitness Evaluation"
					paragraph="We're dedicated to helping you achieve your fitness goals and lead a healthier lifestyle. With our BMI calculator, you can gain insights into your body composition and make informed decisions about your fitness journey. Whether you're looking to shed pounds, gain muscle, or improve your overall well-being, here, you can have access to personalized fitness plans are tailored to meet your unique needs."
				/>

				<div className="container">
					<div className="evaluation__wrapper">
						<div className="form " id="fitness_evaluation_form">
							<form onSubmit={handleSubmit(submitForm, calculateBmi)}>
								<input
									className="form__information"
									type="number"
									name="height"
									placeholder="Height (cm)"
									id="height"
									value={heightValue}
									onInput={(e) => setHeightValue(e.target.value)}
									{...register('height')}
								/>
								{errors && errors.height && (
									<p className="form__error">
										<MdOutlineErrorOutline /> {errors.height.message}{' '}
									</p>
								)}
								<input
									className="form__information"
									type="number"
									name="weight"
									placeholder="Weight (kg)"
									id="weight"
									value={weightValue}
									onInput={(e) => setWeightValue(e.target.value)}
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
										<input
											type="radio"
											id="weight_reduction"
											name="fitness_goal"
											value="weight_reduction"
											checked={selectedFitnessGoal === 'weight_reduction'}
											onChange={() => handleRadioChange('weight_reduction')}
										/>
										<label htmlFor="weight_reduction"> Weight reduction</label>
									</div>

									<div>
										<input type="radio" id="muscle_gain" name="fitness_goal" value="muscle_gain" checked={selectedFitnessGoal === 'muscle_gain'} onChange={() => handleRadioChange('muscle_gain')} />
										<label htmlFor="muscle_gain"> Muscle gain</label>
									</div>

									<div>
										<input type="radio" id="hipertrophy" name="fitness_goal" value="hipertrophy" checked={selectedFitnessGoal === 'hipertrophy'} onChange={() => handleRadioChange('hipertrophy')} />
										<label htmlFor="hipertrophy"> Hipertrophy</label>
									</div>
								</div>

								<Button value="Submit" className="btn__mg-right" />
							</form>
						</div>

						<div className="bmi__wrapper" id="bmi_info">
							<h2>Your BMI result</h2>
							<div className="bmi-value__wrapper">
								<p className={bmiInterpretation.classname}>{bmiValue}</p>
								<span className={bmiInterpretation.classname}>{bmiInterpretation.scale}</span>
							</div>
							<p>{bmiInterpretation.description}</p>
						</div>
						{fitnessPlan && fitnessPlan.exercises && (
							<div className="fitness-plan__wrapper" id="fitness_plan_exercises">
								<div ref={fitnessPlanRef} className="fitness-plan__card" id="fitness-plan__card">
									<h3>Fitness Plan</h3>
									<p>{fitnessPlan.description}</p>
									<h4>Exercises</h4>
									<ol>
										{fitnessPlan.exercises.map((exercise, index) => (
											<li key={index}>
												{exercise.name} ({exercise.repetitions})
											</li>
										))}
									</ol>
								</div>

								<ButtonSave onClick={handleDownloadPDF} />
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default FitnessEvaluation;
