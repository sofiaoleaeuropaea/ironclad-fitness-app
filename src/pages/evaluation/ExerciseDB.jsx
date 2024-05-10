import { useEffect } from "react";

const ExerciseDB = () => {
	 const exercisedbURL = 'https://exercisedb.p.rapidapi.com/exercises';
		const exerciseDBoptions = {
			method: 'GET',
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
			return data;
		} catch (err) {
			console.log(err);
		}
	};})
		

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
			<h3>Your virtual helper</h3>
			<form>
				<input type="text" name="searchExercises" id="searchbar__exercises" onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder="Search your exercise" />
				<div>
					<img src="" alt="" />
					<div><span></span> <span></span></div>
<h4></h4>
				</div>
			</form>
		</div>
	);
};

export default ExerciseDB;
