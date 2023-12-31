// import React from "react";
import imageGrid from "../assets/images-grid.png";

const Lounge = () => {
	return (
		<div className="lounge container section">
			<div className="sectionContainer grid">
				
				<div className="imgDiv">
					<img src={imageGrid} />
				</div>

				<div className="textDiv">
					<h2>Unaccompanied Minor Lounge</h2>

					<div className="grids grid">
						<div className="singleGrid">
							<span className="gridTitle">Help through the airport</span>
							<p>
								You can also call airlines from your phone and book a flight
								ticket to one of you favorite destinations.
							</p>
						</div>

						<div className="singleGrid">
							<span className="gridTitle">Priority Boarding</span>
							<p>
								You can also call airlines from your phone and book a flight
								ticket to one of you favorite destinations.
							</p>
						</div>

						<div className="singleGrid">
							<span className="gridTitle">Care on Flight</span>
							<p>
								You can also call airlines from your phone and book a flight
								ticket to one of you favorite destinations.
							</p>
						</div>

						<div className="singleGrid">
							<span className="gridTitle">Chauffeur-drive services</span>
							<p>
								You can also call airlines from your phone and book a flight
								ticket to one of you favorite destinations.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lounge;
