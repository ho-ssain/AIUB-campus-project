import "./Activities.scss";
import art1 from "../../assets/imgs/art1.jpg";
import art2 from "../../assets/imgs/art2.jpg";
import art3 from "../../assets/imgs/art3.jpg";

import sp1 from "../../assets/imgs/sp1.jpg";
import sp2 from "../../assets/imgs/sp2.jpg";
import sp3 from "../../assets/imgs/sp3.jpg";

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

      <div className="culture-page">
        <h2>Sports</h2>
        <div className="image-gallery">
          <img src={sp1} alt="Culture 1" />
          <img src={sp2} alt="Culture 2" />
          <img src={sp3} alt="Culture 3" />
        </div>
        <div className="event-section">
          <h5>
            The university also has an engaging Sports Complex sprawling across
            the campus with a full-length football field, cricket
            practice-pitch, basketball, tennis, badminton, volleyball courts,
            and an open gallery with a seating capacity of around 500. The Sport
            Complex is overseen by the Office of Sports, that is responsible for
            the overall development of sports for the students, academic
            faculties, and administrative officials of the university. The
            university promotes sports activities by organizing, facilitating,
            and participating in various internal and external sporting events
            and tournaments throughout the semesters.
          </h5>
          <ul>
            <li>Intra-AIUB Cricket Tournament</li>
            <li>Intra-AIUB Football Tournament</li>
            <li>AIUB Champions League (Football Tournament)</li>
            <li>AIUB Indoor Games</li>
            <li>AIUB Premier League (Cricket Tournament)</li>
            <li>AIUB World Cup (Football Tournament)</li>
            <li>Duke of Edinburgh Awards</li>
            <li>Bangabandhu Inter University Sports Champs</li>
            <li>Clemon Indoor Uni Cricket</li>
            <li>Wings Uni Futsal</li>
            <li>Hero Honda Cup Cricket Tournament</li>
            <li>BCB-Walton Cup</li>
            <li>
              MoU with the Bangladesh Cricket Board, Bangladesh Football
              Federation, and the National Shooting Federation
            </li>
          </ul>

          <h5>Currently AIUB has the following Indoor Sports Facilities:</h5>
          <ul>
            <li>Chess</li>
            <li>Billiard</li>
            <li>Carom</li>
            <li>Ludo</li>
            <li>Table Tennis</li>
          </ul>

          <h5>Currently AIUB has the following Outdoor Sports Facilities:</h5>
          <ul>
            <li>Football Field</li>
            <li>Cricket Practice Pitch</li>
            <li>Basketball Court</li>
            <li>Badminton Court</li>
            <li>Tennis Court</li>
            <li>Volleyball Court</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Activities;
