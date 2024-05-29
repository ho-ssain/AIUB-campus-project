import "./Footer.scss";
import logo from "../../assets/imgs/aiub-logo.svg";

export default function Footer() {
  return (
    <footer>
      {/* <!-- Footer  --> */}
      <section className="footer" id="footer">
        <div className="footer-box">
          {/* <!-- logo  --> */}
          <a href="#" className="logo footer-logo">
            <img src={logo} alt="logo" /> American International
            University-Bangladesh (AIUB)
          </a>

          <p>
            408/1 (Old KA 66/1), <br />
            Kuratoli, Khilkhet, <br />
            Dhaka 1229, Bangladesh <br />
            info@aiub.edu
          </p>

          <div className="social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-box">
          <h2>Become AIUBian</h2>
          <a href="#">Future Students</a>
          <a href="#">On Campus</a>
          <a href="#">Tuition Fees</a>
          <a href="#">Scholarships</a>
          <a href="#">Apply Now</a>
        </div>

        <div className="footer-box">
          <h2>Academics</h2>
          <a href="#">Academic Calendars</a>
          <a href="#">Academic Regulations</a>
          <a href="#">Faculty of CSE</a>
          <a href="#">Faculty of Business</a>
          <a href="#">Administration</a>
        </div>

        <div className="footer-box">
          <h2>Research</h2>
          <a href="#">AJBE</a>
          <a href="#">AJSE</a>
          <a href="#">Past Conferences</a>
          <a href="#">Upcoming Conferences</a>
          <a href="#">Collaborating Institutes</a>
        </div>
      </section>

      {/* <!-- Copyright  --> */}
      <div className="copyright">
        <p>
          &#169;2000-2024 by <a href="#">AIUB</a>, All Right Reserved.
        </p>
        <hr />
      </div>
    </footer>
  );
}
