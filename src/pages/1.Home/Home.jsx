import "./Home.scss";
import Info from "./info";
import img1 from "../../assets/imgs/bengali_new_year.jpg";

import img2 from "../../assets/imgs/it-1.jpg";
import img3 from "../../assets/imgs/it-2.jpg";
import img4 from "../../assets/imgs/it-3.jpg";
import img5 from "../../assets/imgs/it-4.jpg";

import img6 from "../../assets/imgs/lab-1.jpg";
import img7 from "../../assets/imgs/lab-2.jpg";
import img8 from "../../assets/imgs/lab-3.jpg";
import img9 from "../../assets/imgs/lab-4.jpg";

import img10 from "../../assets/imgs/caf-1.jpg";
import img11 from "../../assets/imgs/caf-2.jpg";
import img12 from "../../assets/imgs/caf-3.jpg";
import img13 from "../../assets/imgs/caf-4.jpg";

import img14 from "../../assets/imgs/aac.png";
import img15 from "../../assets/imgs/abc.jpg";
import img16 from "../../assets/imgs/acc-logo.jpg";
import img17 from "../../assets/imgs/adc.png";
import img18 from "../../assets/imgs/arc.png";
import img19 from "../../assets/imgs/aiub-environment-club.png";
import ContactForm from "../../components/ContactForm/Contact";
import Welcome from "../../components/Welcome/Welcome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Welcome />

      {/* Activities  */}
      <section className="activities section-2" id="activities">
        <h2 className="section-title">Campus</h2>
        <span className="section-subtitle">Activities</span>
        <div className="activities-container container-2 grid-2">
          <img src={img1} alt="bengali-new-year" className="activities-img" />
          <div className="activities-data">
            <Info />

            <p className="activities-description">
              Along with academics, AIUB also thrives on cultural activities and
              festivals. AIUB always motivates the students to participate in
              various kind of cultural activities which act ...
            </p>

            <Link to="activities" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities  */}
      <section className="facilities section-2" id="facilities">
        <h2 className="section-title">Facilities</h2>
        <span className="section-subtitle">
          25 computer labs, 19 engineering labs, 10 design studios,
          <br />
          4 physics labs, 2 chemistry labs, and 1 language lab
          <br />
          with 40 workstations in each and 24 servers to support the IT
          infrastructure
          <br />
          and many more....
        </span>

        <div className="facilities-container container grid">
          <div className="f-content">
            <h3 className="f-title">AIUB IT</h3>

            <div className="f-box">
              <div className="f-group">
                {/*--=========================--*/}
                <div className="f-data">
                  <img src={img2} alt="it1" />
                </div>

                {/*--=========================--*/}
                <div className="f-data">
                  <img src={img3} alt="it2" />
                </div>
              </div>

              <div className="f-group">
                {/*--=============  ============--*/}
                <div className="f-data">
                  <img src={img4} alt="it3" />
                </div>

                {/*--============  =============--*/}
                <div className="f-data">
                  <img src={img5} alt="it4" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <Link to="facilities" className="button-flex">
              👉Learn More
            </Link>
          </div>

          <div className="f-content">
            <h3 className="f-title">Computer Labs</h3>

            <div className="f-box">
              <div className="f-group">
                {/*--=========================--*/}
                <div className="f-data">
                  <img src={img6} alt="cl1" />
                </div>

                {/*--=========================--*/}
                <div className="f-data">
                  <img src={img7} alt="cl2" />
                </div>
              </div>

              <div className="f-group">
                {/*--=============  ============--*/}
                <div className="f-data">
                  <img src={img8} alt="cl3" />
                </div>

                {/*--============  =============--*/}
                <div className="f-data">
                  <img src={img9} alt="cl4" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <Link to="facilities" className="button-flex">
              👉Learn More
            </Link>
          </div>

          <div className="f-content">
            <h3 className="f-title">Cafeteria</h3>

            <div className="f-box">
              <div className="f-group">
                {/*--=========================--*/}
                <div className="f-data">
                  <img src={img10} alt="cf1" />
                </div>

                {/*--=========================--*/}
                <div className="f-data">
                  <img src={img11} alt="cf2" />
                </div>
              </div>

              <div className="f-group">
                {/*--=============  ============--*/}
                <div className="f-data">
                  <img src={img12} alt="cf3" />
                </div>

                {/*--============  =============--*/}
                <div className="f-data">
                  <img src={img13} alt="cf4" />
                </div>
              </div>
            </div>

            <br />
            <br />
            <Link to="facilities" className="button-flex">
              👉Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Clubs  */}
      <section className="clubs section-2" id="clubs">
        {/* <!-- heading  --> */}
        <div className="club-heading">
          <h1>
            AIUB Student
            <br />
            <span>Clubs</span>
          </h1>
          <Link to="clubs" className="btn">
            See All<i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>

        {/* <!-- clubs-container --> */}
        <div className="clubs-container">
          {/* <!-- Box-1  --> */}
          <div className="box box1">
            <img src={img14} alt="aac" />
            <h2>AIUB Arts Club</h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>

          {/* <!-- Box-2  --> */}
          <div className="box box2">
            <img src={img15} alt="abb" />
            <h2>AIUB Business Club</h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>

          {/* <!-- Box-3  --> */}
          <div className="box box3">
            <img src={img16} alt="acc" />
            <h2>AIUB Computer Club</h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>

          {/* <!-- Box-4  --> */}
          <div className="box box4">
            <img src={img17} alt="adc" />
            <h2>AIUB Drama Club</h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>

          {/* <!-- Box-5  --> */}
          <div className="box box5">
            <img src={img18} alt="arc" />
            <h2>AIUB Robotic Crew</h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>

          {/* <!-- Box-6  --> */}
          <div className="box box5">
            <img src={img19} alt="aec" />
            <h2>AIUB Environment Club</h2>
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </section>

      {/* Contact Page  */}
      <ContactForm />
    </main>
  );
}
