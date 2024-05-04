import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { MdOutlineErrorOutline } from 'react-icons/md';

import Buttons from '../../components/Buttons';
import FormValidation from '../../components/FormValidation';
import { bmiDescription, trainingPlans } from '../../data';

const FitnessEvaluation = () => {
	const [selectedFitnessGoal, setSelectedFitnessGoal] = useState("weight_reduction")
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
		if (bmi < 18.5 && selectedFitnessGoal === 'weight_reduction') {
			bmiInterpretation = bmiDescription[0];
			fitnessPlan = trainingPlans[0];
		} else if (bmi < 18.5 && selectedFitnessGoal === 'muscle_gain') {
			bmiInterpretation = bmiDescription[0];
			fitnessPlan = trainingPlans[1];
		} else if (bmi < 18.5 && selectedFitnessGoal === 'hipertrophy') {
			bmiInterpretation = bmiDescription[0];
			fitnessPlan = trainingPlans[2];
		} else if (bmi >= 18.5 && bmi < 25 && selectedFitnessGoal === 'weight_reduction') {
			bmiInterpretation = bmiDescription[1];
			fitnessPlan = trainingPlans[3];
		} else if (bmi >= 18.5 && bmi < 25 && selectedFitnessGoal === 'muscle_gain') {
			bmiInterpretation = bmiDescription[1];
			fitnessPlan = trainingPlans[4];
		} else if (bmi >= 18.5 && bmi < 25 && selectedFitnessGoal === 'hipertrophy') {
			bmiInterpretation = bmiDescription[1];
			fitnessPlan = trainingPlans[5];
		} else if (bmi >= 25 && bmi < 30 && selectedFitnessGoal === 'weight_reduction') {
			bmiInterpretation = bmiDescription[2];
			fitnessPlan = trainingPlans[6];
		} else if (bmi >= 25 && bmi < 30 && selectedFitnessGoal === 'muscle_gain') {
			bmiInterpretation = bmiDescription[2];
			fitnessPlan = trainingPlans[7];
		} else if (bmi >= 25 && bmi < 30 && selectedFitnessGoal === 'hipertrophy') {
			bmiInterpretation = bmiDescription[2];
			fitnessPlan = trainingPlans[8];
		} else if (bmi >= 30 && selectedFitnessGoal === 'weight_reduction') {
			bmiInterpretation = bmiDescription[3];
			fitnessPlan = trainingPlans[9];
		} else if (bmi >= 30 && selectedFitnessGoal === 'muscle_gain') {
			bmiInterpretation = bmiDescription[3];
			fitnessPlan = trainingPlans[10];
		} else if (bmi >= 30 && selectedFitnessGoal === 'hipertrophy') {
			bmiInterpretation = bmiDescription[3];
			fitnessPlan = trainingPlans[11];
		}
		setBmiInterpretation(bmiInterpretation);
		setFitnessPlan(fitnessPlan);
	};

	  const handleDownloadPDF = () => {
			const FitnessPlanPDF = document.getElementById('fitness_plan_exercises');
			
			html2canvas(FitnessPlanPDF).then((canvas) => {
				const imgData = canvas.toDataURL('image/png');
				const pdf = new jsPDF();
				pdf.addImage(imgData, 'PNG', 0, 0);
				pdf.save('ironclad-fitness-plan.pdf');
				
			});
		};

	return (
		<>
			<section id="evaluation" className="evaluation">
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

								<Buttons value="Submit" className="btn__form" />
							</form>
						</div>

						<div className="bmi__wrapper" id="bmi_info">
							<h2>Your BMI result</h2>
							<div className="bmi-value__wrapper">
								<p id="bmi__value" className={bmiInterpretation.classname}>
									{bmiValue}
								</p>
								<p>
									You are <span className={bmiInterpretation.classname}>{bmiInterpretation.scale}</span>.
								</p>
							</div>
							<p>{bmiInterpretation.description}</p>
						</div>
						{fitnessPlan && fitnessPlan.exercises && (
							<div className="fitness-plan__wrapper" id="fitness_plan_exercises">
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
								<Buttons onClick={handleDownloadPDF}>Save it for later</Buttons>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default FitnessEvaluation;
