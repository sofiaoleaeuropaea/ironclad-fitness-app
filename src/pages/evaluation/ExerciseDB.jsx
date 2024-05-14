import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { exercisedbURL, exerciseDBoptions } from '../../data/exercisedbAPI';

const ExerciseDB = () => {
	const [exerciseInfo, setExerciseInfo] = useState([]);
	const [filteredExercise, setFilteredExercise] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const optionsSliderExercises = {
		perPage: 4,
		perMove: 1,

		arrows: false,
		gap: '2.5rem',
		pagination: false,
		wheel: true,
		breakpoints: {
			992: { perPage: 3 },
			650: { perPage: 1 },
		},
	};

	useEffect(() => {
		const fetchExerciseDB = async () => {
			try {
				const response = await fetch(exercisedbURL, exerciseDBoptions);

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
		setFilteredExercise(filterExercise);
	}, [searchQuery, exerciseInfo]);

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<section id="exercises__info" className="exercises__info">
			<div className="container">
				<div className="exercises__wrapper">
					<h2>Train like a pro</h2>

					<form>
						<div className="searchbar__wrapper">
							<img src="images/search_icon.svg" alt="Search Icon" />
							<input type="text" name="searchExercises" id="searchbar__exercises" value={searchQuery} onChange={handleSearch} placeholder="Search your exercise" />
							<span className="searchbar__underline"></span>
						</div>
					</form>

					<div className="exercises__card">
						<Splide options={optionsSliderExercises}>
							{filteredExercise.map((exercise, index) => (
								<SplideSlide key={index}>
									<Link to={`${exercise.id}`}>
										<div>
											<img src={exercise.gifUrl} alt={exercise.name} className="img-fluid" />
											<div className="exercises__targets">
												<span className="small-text-size">{exercise.bodyPart}</span> <span className="small-text-size">{exercise.target}</span>
											</div>
										</div>
										<h4>{exercise.name}</h4>
									</Link>
								</SplideSlide>
							))}
						</Splide>
					</div>
				</div>
				<Outlet />
			</div>
		</section>
	);
};

export default ExerciseDB;
