import { useParams } from 'react-router-dom';

import { exercisedbURL, exerciseDBoptions } from '../../data/exercisedbAPI';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import ScrollReveal from '../../components/ScrollReveal';

const ExercisesInstructions = () => {
	const [exerciseInfo, setExerciseInfo] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		const fetchExerciseDB = async () => {
			try {
				const response = await fetch(exercisedbURL, exerciseDBoptions);

				const data = await response.json();
				setExerciseInfo(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchExerciseDB();
	}, []);

	const exerciseInstruction = exerciseInfo.find((exercise) => {
		return exercise.id === id;
	});

	if (!exerciseInstruction) {
		return <Loader />;
	}

	return (
		<div className="exercise__wrapper">
			<div className="exercise-intro__card">
				<ScrollReveal>
					<h3>{exerciseInstruction.name}</h3>
					<img src={exerciseInstruction.gifUrl} className="img-fluid " alt={exerciseInstruction.name} />
					<div className="exercise-intro__targets">
						<span className="small-text-size">{exerciseInstruction.bodyPart}</span> <span className="small-text-size">{exerciseInstruction.target}</span>
					</div>
				</ScrollReveal>
			</div>
			<div className="exercise-instructions__card">
				<ScrollReveal>
					<h4 className="exercise-instructions__title">Instructions</h4>
					<ul className="exercise-instructions__description">
						{exerciseInstruction.instructions.map((instruction, index) => (
							<li key={index} className="instructions__wrapper">
								<span className="instructions__number">{index + 1}</span>
								<p>{instruction}</p>
							</li>
						))}
					</ul>
				</ScrollReveal>
			</div>
		</div>
	);
};

export default ExercisesInstructions;
