import React from "react";
import Images from "../../Constants/Images";
import "./Header.scss";

const Header = () => (
	<header className="header">
		<div className='container'>
			<div className="header__container">
				<div className="header__container-logo">
					<img src={Images.LOGO} alt="logo"/>
					<div className="discover">
						<p>Discover</p>
						<p>Job</p>
					</div>

				</div>
				<div className="header__container-search">
					<input className="input-search" placeholder='Search for motion trend......'/>
				</div>
				<div className="header__container-auth">
					<i className="fa-solid fa-magnifying-glass"></i>
					<p>Login</p>
					<p>Signup</p>
				</div>
			</div>

		</div>

	</header>
);

export default Header;
