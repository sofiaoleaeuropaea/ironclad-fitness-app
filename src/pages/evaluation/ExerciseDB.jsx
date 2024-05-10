import { useEffect, useState } from 'react';

const ExerciseDB = () => {
	const [exerciseInfo, setExerciseInfo] = useState([]);
	const [filteredExercise, setFilteredExercise] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const exercisedbURL = 'https://exercisedb.p.rapidapi.com/exercises';

	const exerciseDBoptions = {
		method: 'GET',
		params: { limit: '1' },
		headers: {
			'X-RapidAPI-Key': '8abd9ce163mshe02598f387d31f5p123801jsn5ed79f2c6d34',
			'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		},
	};

	useEffect(() => {
		const fetchExerciseDB = async () => {
			try {
				const response = await fetch(exercisedbURL, exerciseDBoptions);
				const data = await response.json();
				setExerciseInfo(data);
				setFilteredExercise(data.slice(0, 0)); 
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
			// exercise.instructions.toLowerCase().includes(searchQuery.toLowerCase()) ||
			// exercise.gifUrl.includes(searchQuery)
		);
		setFilteredExercise(filterExercise);
	}, [searchQuery, exerciseInfo]);

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<div className="exercisedb__wrapper">
			<h3>Your virtual helper</h3>
			<form>
				<input type="text" name="searchExercises" id="searchbar__exercises" value={searchQuery} onChange={handleSearch} placeholder="Search your exercise" />
				<div id="exerciseDetail">
					{filteredExercise.map((exercise, index) => (
						<div key={index}>
							<img src={exercise.gifUrl} alt={exercise.name} />
							<div>
								<span>{exercise.bodyPart}</span> <span>{exercise.target}</span>
							</div>
							<h4>{exercise.name}</h4>
							<p>{exercise.instructions}</p>
						</div>
					))}
				</div>
			</form>
		</div>
	);
};

export default ExerciseDB;
