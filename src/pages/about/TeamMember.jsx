import { useParams } from 'react-router-dom';
import { personalTrainers } from '../../data';

const TeamMember = () => {
	const { id } = useParams();
	const member = personalTrainers.find((personalTrainer) => {
		return personalTrainer.id === Number(id);
	});

	return (
		<section id="member" className="member">
			<div className="container">
				<div className="member__wrapper">
					<div className="member__intro">
						<h2>{member.name}</h2>
						<div className="member__intro__modality">
							{member.modalities.map((modality, index) => (
								<span className="modality" key={index}>
									{modality}
								</span>
							))}
						</div>

						<img src={member.img} className="img-fluid " alt={member.name} loading="lazy" />

						<blockquote className="member__intro__quote">
							<p>"{member.quote}"</p>
						</blockquote>
					</div>
					<div className="member__biography">
						<h3 className="member__biography__title">About</h3>
						<p>{member.biography}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamMember;
