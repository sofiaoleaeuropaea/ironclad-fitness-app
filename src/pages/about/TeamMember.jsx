import { useParams } from 'react-router-dom';
import { personalTrainers } from '../../data';
import ScrollReveal from '../../components/ScrollReveal';

const TeamMember = () => {
	const { id } = useParams();
	const member = personalTrainers.find((personalTrainer) => {
		return personalTrainer.id === Number(id);
	});

	return (
		<section id="member" className="member">
			<div className="container">
				<ScrollReveal>
					<div className="member__wrapper">
						<div className="member__intro">
							<ScrollReveal>
								<h2>{member.name}</h2>
							</ScrollReveal>
							<ScrollReveal>
								<div className="member__intro__modality">
									{member.modalities.map((modality, index) => (
										<span className="modality" key={index}>
											{modality}
										</span>
									))}
								</div>
							</ScrollReveal>
							<ScrollReveal>
								<img src={member.img} className="img-fluid " alt={member.name} />
							</ScrollReveal>
							<ScrollReveal>
								<blockquote className="member__intro__quote">
									<p>"{member.quote}"</p>
								</blockquote>
							</ScrollReveal>
						</div>
						<div className="member__biography">
							<ScrollReveal>
								<h3 className="member__biography__title">About</h3>
								<p>{member.biography}</p>{' '}
							</ScrollReveal>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
};

export default TeamMember;
