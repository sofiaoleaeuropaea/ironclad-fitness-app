import { Link } from 'react-router-dom';

import { personalTrainers } from '../../data';

const Trainers = () => {
	return (
		<section id="team" className="team">
			<div className="container">
				<h2>Meet our trainers</h2>
				<div className="team__wrapper">
					{personalTrainers.map((personalTrainer) => (
						<div key={personalTrainer.id} className="team__card">
							<Link to={`/about/${personalTrainer.id}`}>
								<div className="team__img effect">
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
