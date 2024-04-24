import { Link } from 'react-router-dom';

import { personalTrainers } from '../../data';

const Trainers = () => {
	return (
		<section id="trainer" className="trainer">
			<div className="container">
				<h2>Meet our trainers</h2>
				<div className="trainer__wrapper">
					{personalTrainers.map((personalTrainer) => (
						<div key={personalTrainer.id} className="trainer__card">
							<Link to={`/about/${personalTrainer.id}`}>
								<div className="trainer__img effect">
									<img src={personalTrainer.img} className="img-fluid " alt={personalTrainer.name} loading="lazy" />
								</div>
								<h3>{personalTrainer.name}</h3>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Trainers;
