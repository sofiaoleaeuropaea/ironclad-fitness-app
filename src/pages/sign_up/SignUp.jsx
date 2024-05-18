import FormSignUp from './FormSignUp';
import ScrollReveal from '../../components/ScrollReveal';

function SignUp() {
	return (
		<section id="sign-up" className="sign-up">
			<div className="sign-up__wrapper " id="sign-title">
				<img src="images/gymforfun.jpg" alt="person in the gym" className="img-fluid sign-up__img" />

				<h2 id="img-title">
					GYM <br />
					FOR
					<br /> FUN
				</h2>
			</div>
			<div className="container" id="sign-form">
				<div className="sign-up__form">
					<ScrollReveal>
						<h2 id="form__title">Sign up</h2>
						<FormSignUp />
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
