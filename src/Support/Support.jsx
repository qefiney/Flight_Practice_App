import gridImage from '../assets/images-grid.png'

const Support = () => {
	return (
		<section className="support container section">
			<div className="sectionContainer">
				<div className="titlesDiv">
					<small>Travel Support</small>
					<h2>Plan your travel with confidence</h2>
					<p>
						Find help wit booking anf travel plans, see what to expect along the
						journey!!
					</p>
				</div>

				<div className="infoDiv grid">

					<div className="textDiv grid">

						<div className="singleInfo">
							<span className="number">01</span>
							<h4>Travel Requirements for Dubai</h4>
							<p>
								Find help with booking and travel plans, see what to expect aong
								the journey to your favorite destinations!
							</p>
						</div>

            <div className="singleInfo">
							<span className="number colorOne">02</span>
							<h4>Chauffer services at your arrival</h4>
							<p>
								Find help with booking and travel plans, see what to expect aong
								the journey to your favorite destinations!
							</p>
						</div>

            <div className="singleInfo">
							<span className="number colorTwo">03</span>
							<h4>Multi-rst trave insurance</h4>
							<p>
								Find help with booking and travel plans, see what to expect aong
								the journey to your favorite destinations!
							</p>
						</div>

					</div>

        <div className="imgDiv">
          <img src={gridImage} alt="" />
        </div>

				</div>

			</div>
		</section>
	);
};

export default Support;
