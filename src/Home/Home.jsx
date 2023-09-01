import { useEffect } from "react";

// Imported Images and Videos
import video from "./../assets/vid1.mp4";
import aeroplane from "./../assets/plane.png";

// AOS Import
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
	// UseEffect to set the animation duration
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	return (
		<section className="home flex container">
			<h1 className="mainText" data-aos="fade-up" data-aos-duration="2500">
				Create Ever-lasting Memories With Us
			</h1>

			<div className="homeImages flex">
				<div className="videoDiv">
					<video src={video} autoPlay muted loop className="video"></video>
				</div>

				<img src={aeroplane} className="plane" alt="" />
			</div>
		</section>
	);
};

export default Home;
