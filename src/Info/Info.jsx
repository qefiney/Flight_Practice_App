// Importing icons ===>

import { BsShieldCheck } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";

const Info = () => {
	return (
		<section className="info section">
			<div className="infoContainer container">
				<div className="titleDiv flex">
					<h2>Tavel to make memories all around the world</h2>
					<button className="btn">View All</button>
				</div>

				<div className="cardsDiv grid">
					<div className="singleCard grid">
						<div className="iconDiv flex">
							<RxCalendar className="icon" />
						</div>
						<span className="cardTitle">Book & Relax</span>
						<p>
							You can also call airlines from your phone and book a flight
							ticket!
						</p>
					</div>

					<div className="singleCard grid">
						<div className="iconDiv flex colorOne">
							<BsShieldCheck className="icon" />
						</div>
						<span className="cardTitle">Smart Checklist</span>
						<p>
							You can also call airlines from your phone and book a flight
							ticket!
						</p>
					</div>

					<div className="singleCard grid">
						<div className="iconDiv flex colorTwo">
							<RxCalendar className="icon" />
						</div>
						<span className="cardTitle">Save more</span>
						<p>
							You can also call airlines from your phone and book a flight
							ticket!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
