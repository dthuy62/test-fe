import React from "react";
import Images from "../../Constants/Images";
import "./Footer.scss";

const Footer = () => (
	<div className="footer">
		<div className="footer__contact">
			<div className="container">
				<div className="footer__contact-mail">
					<p>Contact</p>
					<p>motiontrend@test.com</p>
				</div>
				<div className="footer__contact-social">
					<div className="inner">
						<p>@ Motiontrend. All rights reserved.</p>
						<div className="social-icons">
							<img src={Images.IG_IC} alt="instagram"/>
							<img src={Images.FB_IC} alt=""/>
							<img src={Images.YT_IC} alt=""/>
						</div>
					</div>
				</div>
			</div>

		</div>
		<div className="footer__navbar">
			<div className="container">
				<ul className="footer__navbar-items">
					<li>Introduction</li>
					<li>Terms of Service</li>
					<li>Language</li>
					<li>Customer Service</li>
				</ul>
				<div className="footer__navbar-logo">
					<img src={Images.LOGO_BLACK} alt=""/>
				</div>
			</div>

		</div>

	</div>

);

export default Footer;
