import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { fetchExerciseDB } from '../../data/exercisedbAPI';
import SearchIcon from '../../assets/svg/search_icon.svg';
import ScrollReveal from '../../components/ScrollReveal';

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
			650: { perPage: 2 },
			490: { perPage: 1 },
		},
	};

	useEffect(() => {
		const state = { setExerciseInfo, setFilteredExercise };
		fetchExerciseDB(state);
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

	const FilteredExercise = () =>
		filteredExercise.map((exercise, index) => {
			return (
				<SplideSlide key={index}>
					<div className="exercises__card">
						<Link to={`${exercise.id}`}>
							<ScrollReveal>
								<div className="exercises__img border-radius__theme">
									<img src={exercise.gifUrl} alt={exercise.name} className="img-fluid" />
								</div>
								<div className="exercises__targets card-topics">
									<span className="small-text-size">{exercise.bodyPart}</span> <span className="small-text-size">{exercise.target}</span>
								</div>

								<h3 className="card-subtitle">{exercise.name}</h3>
							</ScrollReveal>
						</Link>
					</div>
				</SplideSlide>
			);
		});

	return (
		<section id="exercises__info" className="exercises__info">
			<div className="container">
				<div className="exercises__wrapper">
					<ScrollReveal>
						<h2>Train like a pro</h2>
						<form>
							<div className="searchbar__wrapper">
								<img src={SearchIcon} alt="Search Icon" />
								<input type="text" name="searchExercises" id="searchbar__exercises" value={searchQuery} onChange={handleSearch} placeholder="Search your exercise" />
								<span className="searchbar__underline"></span>
							</div>
						</form>
					</ScrollReveal>

					<Splide options={optionsSliderExercises}>
						<FilteredExercise />
						
					</Splide>
				</div>
				<Outlet />
			</div>
		</section>
	);
};

export default ExerciseDB;
