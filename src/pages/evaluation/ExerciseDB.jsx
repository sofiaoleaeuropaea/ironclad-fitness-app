import { fetchExerciseDB, exerciseDBoptions } from '../../data/exercisedb';

const ExerciseDB = () => {
    //  const handleSearch = async () => {
	// 			if (search) {
	// 				const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseDBoptions);

	// 				const searchedExercises = exercisesData.filter(
	// 					(item) =>
	// 						item.name.toLowerCase().includes(search) || item.target.toLowerCase().includes(search) || item.bodyPart.toLowerCase().includes(search)
	// 				);

	// 				window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

	// 				setSearch('');
	// 				setExercises(searchedExercises);
	// 			}
	// 		};
	return (
		<div className="exercisedb__wrapper">
			<h4>Your virtual helper</h4>
			<form >
                <input type="text" name="searchExercises" id="searchbar__exercises" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search your exercise" />
                <div>{ }</div>
			</form>
		</div>
	);
};

export default ExerciseDB;
