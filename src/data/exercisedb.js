export const exercisedbURL = 'https://exercisedb.p.rapidapi.com/exercises';
export const exerciseDBoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8abd9ce163mshe02598f387d31f5p123801jsn5ed79f2c6d34',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};
export const fetchExerciseDB = async () => {
	try {
		const response = await fetch(exercisedbURL, exerciseDBoptions);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
