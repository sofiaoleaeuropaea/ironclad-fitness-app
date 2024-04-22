import { personalTrainers } from '../../data';

const Trainers = () => {
	return (
		<section id="trainer" className="trainer">
			<div className="container">
				<h2>Meet our trainers</h2>
				<div className="trainer__wrapper">
					{personalTrainers.map((item) => (
						<div key={item.id} className="trainer__card">
							<img src={item.img} className="img-fluid trainer__img" alt={item.name} loading='lazy' />
							<h3>{item.name}</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Trainers;
