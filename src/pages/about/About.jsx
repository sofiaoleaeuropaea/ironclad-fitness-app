
import Heading from '../../components/Heading';
import Trainers from './Team';
import Partnership from './Partners';

const About = () => {
	return (
		<>
			<section id="about" className="about">
				<Heading
					title="Who we are"
					paragraph="We aim to cultivate an ever-growing community, spreading the message of health and wellness to the wider world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur
							aliquam quam, recusandae ipsa molestias molestiae, doloribus, modi accusantium fugiat qui repellat cupiditate vero. Voluptate facilis expedita ex nesciunt officia!"
				/>
			</section>
			<Trainers />
			<Partnership/>
	
		</>
	);
};

export default About;
