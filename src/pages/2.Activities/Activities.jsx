import "./Activities.scss";
import art1 from "../../assets/imgs/art1.jpg";
import art2 from "../../assets/imgs/art2.jpg";
import art3 from "../../assets/imgs/art3.jpg";

function Activities() {
  return (
    <div>
      <div className="culture-page">
        <h2>Arts & Culture</h2>
        <div className="image-gallery">
          <img src={art1} alt="Culture 1" />
          <img src={art2} alt="Culture 2" />
          <img src={art3} alt="Culture 3" />
        </div>
        <div className="event-section">
          <h3>
            AIUB Boishakhi Ullash (Annual Celebration of the Bengali New Year)
          </h3>
          <ul>
            <li>Day-long Concert</li>
            <li>Student-run Stalls</li>
            <li>Road Painting and Campus Decoration</li>
          </ul>

          <h3>
            AIUB Boshonto Utshob (Annual Celebration of &quot;Pohela
            Falgun&quot;, the first day of Spring)
          </h3>
          <ul>
            <li>Musical & Dance Performances</li>
            <li>Poetry Recitals</li>
          </ul>

          <h3>
            Ekushey February (Annual Commemoration of the International Mother
            Language Day)
          </h3>
          <ul>
            <li>
              Students & Staff paying Tribute to the Language Martyrs in the
              Shahid Minar on campus
            </li>
          </ul>

          <h3>
            Independence Day (Annual Commemoration of the Independence Day of
            Bangladesh)
          </h3>
          <ul>
            <li>Film Shows</li>
            <li>Stage and Street Plays</li>
            <li>Musical & Dance Performances</li>
          </ul>

          <h3>Saraswati Puja</h3>
          <ul>
            <li>Traditional Veneration</li>
            <li>Poetry Recitals</li>
            <li>Musical & Dance Performances</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Activities;
