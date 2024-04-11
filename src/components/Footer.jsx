import React from 'react'

const Footer = () => {
  return (
		<footer id="footer" className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<Link to="/">
						<img src={ironclad_logo} className="img-fluid logo" alt="Ironclad Logo" />
					</Link>
					<ul>
						<li>
							<a href="/privacy" target="_blank">
								Privacy
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								Terms
							</a>
						</li>
						<li>
							<a href="#" target="_blank">
								Contacts
							</a>
						</li>
						<div className="social_media">
							<a href="https://www.instagram.com/internationalhuntington/">
								<img src="images/instagram.png" />
							</a>
							<a href="https://www.instagram.com/internationalhuntington/">
								<img src="images/instagram.png" />
							</a>
						</div>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer
