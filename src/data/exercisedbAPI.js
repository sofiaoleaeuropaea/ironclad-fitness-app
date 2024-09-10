export const fetchExerciseDB = async (state) => {
  const { setExerciseInfo, setFilteredExercise } = state;
  const exercisedbURL = 'https://exercisedb.p.rapidapi.com/exercises';
  const exercisedbApiKey = import.meta.env.VITE_APP_EXERCISEDB_API_KEY;
  const exerciseDBoptions = {
    method: 'GET',
    params: { limit: '10' },
    headers: {
      'X-RapidAPI-Key': exercisedbApiKey,
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
