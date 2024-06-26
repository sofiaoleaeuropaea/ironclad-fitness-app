export const fetchExerciseDB = async (state) => {
	const { setExerciseInfo, setFilteredExercise } = state;
	const exercisedbURL = 'https://exercisedb.p.rapidapi.com/exercises';
	const exerciseDBoptions = {
		method: 'GET',
		params: { limit: '10' },
		headers: {
			'X-RapidAPI-Key': '5ba03dbc45msh1c2bb423c663329p1c06d8jsn4064c934a2e5',
			'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
		},
	};

	try {
		const response = await fetch(exercisedbURL, exerciseDBoptions);
		const data = await response.json();
		setExerciseInfo(data);
		if (setFilteredExercise) setFilteredExercise(data.slice(0, 1));
	} catch (error) {
		console.log('Error fetching data', error);
	}
};
