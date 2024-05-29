import "./Facilities.scss";
import it1 from "../../assets/imgs/it-1.jpg";
import it2 from "../../assets/imgs/it-2.jpg";
import it3 from "../../assets/imgs/it-3.jpg";
import it4 from "../../assets/imgs/it-4.jpg";

import fac1 from "../../assets/imgs/fac1.jpg";
import fac2 from "../../assets/imgs/fac2.jpg";
import fac3 from "../../assets/imgs/fac3.jpg";
import fac4 from "../../assets/imgs/fac4.jpg";
import fac5 from "../../assets/imgs/fac5.jpg";
import fac6 from "../../assets/imgs/fac6.jpg";

function Facilities() {
  return (
    <div className="facilities-page-container">
      <div className="section">
        <h2>Facilities</h2>
        <h3>AIUB IT Infrastructure</h3>
        <div className="image-gallery">
          <img src={it1} alt="IT Infrastructure 1" />
          <img src={it2} alt="IT Infrastructure 2" />
          <img src={it3} alt="IT Infrastructure 3" />
          <img src={it4} alt="IT Infrastructure 4" />
        </div>
        <p>
          Since its inception, AIUB always emphasized the importance of modern
          ICT infrastructure and introduced a broad spectrum of ICT-enabled
          services within its campus. With a Tier 2 Data Center, 1 Gbps
          high-speed internet connection, 10 Gbps campus backbone network,
          super-fast WiFi network, state-of-the-art network incident monitoring
          and defense center, automated entry control system, and a home-grown
          Virtual University Expert System (VUES), AIUB is way ahead than others
          in the country. It houses the largest Virtual Desktop Infrastructure
          (VDI) solution equipped with 25 powerful servers running on Citrix and
          Microsoft Hyper-V virtualization platform. The VDI solution is unique
          in its kind developed and maintained by the IT department and hosts
          1200 virtual machines in the university private cloud.
        </p>
      </div>

      <ul className="facilities-list">
        <li>The largest virtual lab setup in the South Asian region.</li>
        <li>
          25 computer labs, 19 engineering labs, 10 design studios, 4 physics
          labs, 2 chemistry labs, and 1 language lab with 40 workstations in
          each and 24 servers to support the IT infrastructure.
        </li>
        <li>
          International standard Moot Court to facilitate the overall clinical
          legal education.
        </li>
        <li>
          Media Studio with professional-grade facilities for shooting, online
          editing, and live broadcasting.
        </li>
        <li>
          State-of-the-art Auditorium and Multipurpose Hall, with built-in
          acoustics, world-class sound systems, P3 LED projection screens, and a
          seating capacity of around 1000.
        </li>
      </ul>

      <div className="image-gallery">
        <img src={fac1} alt="Facility 1" />
        <img src={fac2} alt="Facility 2" />
        <img src={fac3} alt="Facility 3" />
        <img src={fac4} alt="Facility 4" />
        <img src={fac5} alt="Facility 5" />
        <img src={fac6} alt="Facility 6" />
      </div>
    </div>
  );
}

export default Facilities;
