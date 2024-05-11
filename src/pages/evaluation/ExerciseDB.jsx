import { useEffect, useState } from 'react';

const ExerciseDB = () => {
	const [exerciseInfo, setExerciseInfo] = useState([]);
	const [filteredExercise, setFilteredExercise] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const exercisedbURL = 'https://exercisedb.p.rapidapi.com/exercises';

	const exerciseDBoptions = {
		method: 'GET',
		params: { limit: '1300' },
		headers: {
			'X-RapidAPI-Key': '8abd9ce163mshe02598f387d31f5p123801jsn5ed79f2c6d34',
			'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		},
	};

	useEffect(() => {
		const fetchExerciseDB = async () => {
			try {
				const response = await fetch(exercisedbURL, exerciseDBoptions);
				console.log(response);
				const data = await response.json();
				setExerciseInfo(data);
				setFilteredExercise(data.slice(0, 1));
			} catch (err) {
				console.log(err);
			}
		};
		fetchExerciseDB();
	}, []);

	useEffect(() => {
		const filterExercise = exerciseInfo.filter(
			(exercise) =>
				exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				exercise.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
				exercise.bodyPart.toLowerCase().includes(searchQuery.toLowerCase())
		);
		setFilteredExercise(filterExercise.length > 0 ? [filterExercise[0]] : []);
	}, [searchQuery, exerciseInfo]);

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<section id="exercisedb__info" className="exercisedb__info">
			<div className="container">
				<div className="exercisedb__wrapper">
					<h2>Your virtual helper</h2>
					<form>
						<input type="text" name="searchExercises" id="searchbar__exercises" value={searchQuery} onChange={handleSearch} placeholder="Search your exercise" />
						<div className="exercise__card">
							{filteredExercise.map((exercise, index) => (
								<div key={index}>
									<div className="exercise__details">
										<img src={exercise.gifUrl} alt={exercise.name} className="img-fluid" />
										<div className="exercise__targets small-text-size">
											<span className="small-text-size">{exercise.bodyPart}</span> <span className="small-text-size">{exercise.target}</span>
										</div>
									</div>
									<h4>{exercise.name}</h4>
									<p>{exercise.instructions.join(' ')}</p>
								</div>
							))}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ExerciseDB;
