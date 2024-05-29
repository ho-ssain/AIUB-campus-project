import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { MdOutlineClose } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/" className="logo flex">
            <h1>AIUB-Campus.</h1>
          </Link>
        </div>

        <nav className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="activities" className="navLink">
                Activities
              </Link>
            </li>
            <li className="navItem">
              <Link to="facilities" className="navLink">
                Facilities
              </Link>
            </li>
            <li className="navItem">
              <Link to="clubs" className="navLink">
                Clubs
              </Link>
            </li>
            <li className="navItem">
              <Link to="contact" className="navLink">
                Contact
              </Link>
            </li>

            <button className="btn">
              <Link to="#">Login</Link>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNav">
            <MdOutlineClose className="icon" />
          </div>
        </nav>

        <div onClick={showNav} className="toggleNav">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
