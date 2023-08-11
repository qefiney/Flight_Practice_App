import video from "./../assets/vid1.mp4";
import aeroplane from "./../assets/plane.png";

const Home = () => {
	return (
		<section className="home flex container">
      
			<h1 className="mainText">Create Ever-lasting Memories With Us</h1>

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
 