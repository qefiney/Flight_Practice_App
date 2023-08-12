import { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import logo from "./../assets/logo.png";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
	// Removing Navbar in small screens
	const [active, setActive] = useState("navBarMenu");
	const showNavBar = () => {
		setActive("navBarMenu showNavBar");
	};
	const removeNavBar = () => {
		setActive("navBarMenu");
	};

	// Showing second NavBar with Bg
	const [noBg, addBg] = useState("navBarTwo");
	const addBgColor = () => {
		if (window.scrollY >= 10) {
			addBg("navBarTwo navBarTwo_Color");
		} else {
			addBg("navBarTwo");
		}
	};
	window.addEventListener("scroll", addBgColor);

	return (
		<header className="navBar flex">
			<nav className="navBarOne flex">
				<div>
					<SiConsul className="icon" />
				</div>

				<div className="flex none">
					<li className="flex">
						<BsPhoneVibrate className="icon" />
						Support
					</li>
					<li className="flex">
						<AiOutlineGlobal className="icon" />
						Languages
					</li>
				</div>

				<div className="atb flex">
					<span>Sign In</span>
					<span>Sign Out</span>
				</div>
			</nav>

			<nav className={noBg}>
				<div className="logoDiv">
					<img src={logo} alt="logo Image" className="logo" />
				</div>

				<div className={active}>
					<ul className="menu flex">
						<li onClick={removeNavBar} className="listItem">
							Home
						</li>
						<li onClick={removeNavBar} className="listItem">
							About
						</li>
						<li onClick={removeNavBar} className="listItem">
							Offers
						</li>
						<li onClick={removeNavBar} className="listItem">
							Seats
						</li>
						<li onClick={removeNavBar} className="listItem">
							Destinations
						</li>
					</ul>

					<button onClick={removeNavBar} className="btn flex btnOne">
						Contact
					</button>
				</div>

				<button className="btn flex btnTwo">Contact</button>

				<div onClick={showNavBar} className="toggleIcon">
					<CgMenuGridO className="icon" />
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
