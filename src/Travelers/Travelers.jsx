// import React from 'react'
// imported destination images ====>
import City1 from "../assets/c1.jpg";
import City2 from "../assets/c2.jpg";
import City3 from "../assets/c3.jpg";
import City4 from "../assets/c4.jpg";
// Imported Traveler Image ====>
import Person1 from "../assets/pp1.jpg";
import Person2 from "../assets/pp2.jpg";
import Person3 from "../assets/pp3.jpg";
import Person4 from "../assets/pp4.jpg";

// Displaying data using map array method ====>
const travelers = [
	{
		id: 1,
		destinationImage: City1,
		travelerImage: Person1,
		travelerName: "Wefiney",
		socialLink: "@wefiney",
	},
	{
		id: 2,
		destinationImage: City2,
		travelerImage: Person2,
		travelerName: "Wefiney",
		socialLink: "@wefiney",
	},
	{
		id: 3,
		destinationImage: City3,
		travelerImage: Person3,
		travelerName: "Wefiney",
		socialLink: "@wefiney",
	},
	{
		id: 4,
		destinationImage: City4,
		travelerImage: Person4,
		travelerName: "Wefiney",
		socialLink: "@wefiney",
	},
];

const Travelers = () => {
	return (
		<div className="travelers container section">
			<div className="sectionContainer">
				<h2>Top travelers of this month!</h2>

				<div className="travelersContainer grid">
					{travelers.map(
						({
							id,
							destinationImage,
							travelerImage,
							travelerName,
							socialLink,
						}) => {
							return (
								<div key={id} className="singleTraveler">
									<img
										src={destinationImage}
										alt=""
										className="destinationImage"
									/>

									<div className="travelerDetails">
										<div className="travelerPicture">
											<img
												src={travelerImage}
												alt=""
												className="travelerImage"
											/>
										</div>
										<div className="travelerName">
											<span>{travelerName}</span>
											<p>{socialLink}</p>
										</div>
									</div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
};

export default Travelers;
