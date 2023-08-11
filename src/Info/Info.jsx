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
          <div className="singeCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singeCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singeCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className="icon" />
            </div>
            <span className="cardTitle">Smart Checklist</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>

          <div className="singeCard grid">
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <span className="cardTitle">Book & Relax</span>
            <p>You can also call airlines from your phone and book a flight ticket!</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Info