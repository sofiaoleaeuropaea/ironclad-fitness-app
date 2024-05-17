import { Link } from 'react-router-dom';

import { personalTrainers } from '../../data';
import ScrollReveal from '../../components/ScrollReveal';

const Trainers = () => {
	return (
		<section id="team" className="team">
			<div className="container">
				<ScrollReveal>
					<h2>Meet our trainers</h2>
				</ScrollReveal>
				<div className="team__wrapper">
					{personalTrainers.map((personalTrainer) => (
						<div key={personalTrainer.id} className="team__card">
							<ScrollReveal>
								<Link to={`/about/${personalTrainer.id}`}>
									<div className="team__img effect">
										<img src={personalTrainer.img} className="img-fluid " alt={personalTrainer.name} loading="lazy" />
									</div>
									<h3>{personalTrainer.name}</h3>
								</Link>
							</ScrollReveal>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Trainers;
