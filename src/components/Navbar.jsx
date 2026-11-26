import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "../assets/styles/Navbar.scss";
import logo from "../assets/images/logo-2.png";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <section className={`navbar ${scrolling ? "scrolled" : ""}`}>
        <div className="container">
          <div className="headerLogo">
            <NavLink to="/" className="logoLink">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>

          <div className="headerRight">
            {!isMobile ? (
              <>
                <div className="menu">
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "activeLink" : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="servicesLink">
                      <NavLink
                        to="/Services"
                        className={({ isActive }) =>
                          isActive ? "activeLink" : ""
                        }
                      >
                        Services
                      </NavLink>
                      <IoIosArrowDown className="arrow" aria-hidden="true" />

                      <div className="dropdownContainer">
                        <ul className="dropdownContent">
                          <li>
                            <NavLink
                              to="/ServiceDetails"
                              className={({ isActive }) =>
                                isActive ? "activeLink" : ""
                              }
                            >
                              Service Details
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <NavLink
                        to="/About"
                        className={({ isActive }) =>
                          isActive ? "activeLink" : ""
                        }
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Portfolio"
                        className={({ isActive }) =>
                          isActive ? "activeLink" : ""
                        }
                      >
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Contact"
                        className={({ isActive }) =>
                          isActive ? "activeLink" : ""
                        }
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-toggle" onClick={toggleSidebar}>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.300781 0H5.30078V5H0.300781V0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.300781 9H5.30078V14H0.300781V9Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0.300781 18H5.30078V23H0.300781V18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.30078 0H14.3008V5H9.30078V0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.30078 9H14.3008V14H9.30078V9Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.30078 18H14.3008V23H9.30078V18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.3008 0H23.3008V5H18.3008V0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.3008 9H23.3008V14H18.3008V9Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.3008 18H23.3008V23H18.3008V18Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </>
            ) : (
              <>
                <div className="mobile-menu" onClick={toggleMobileMenu}>
                  <FaBars />
                </div>

                <div
                  className={`mobile-menu-links ${
                    isMobileMenuOpen ? "open" : ""
                  }`}
                >
                  <div className="mobile-header">
                    <div className="mobile-logo">
                      <img src={logo} alt="Logo" />
                    </div>

                    <div className="close-icon" onClick={toggleMobileMenu}>
                      <IoClose />
                    </div>
                  </div>

                  <ul className="mobile-nav-links">
                    <li>
                      <NavLink to="/" onClick={toggleMobileMenu}>
                        Home
                      </NavLink>
                    </li>

                    <li className="mobile-services">
                      <div className="service-header" onClick={toggleServices}>
                        <NavLink to="/Services">Services</NavLink>
                        {isServicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </div>

                      {isServicesOpen && (
                        <ul className="mobile-dropdown">
                          <li>
                            <NavLink
                              to="/ServiceDetails"
                              onClick={toggleMobileMenu}
                              style={{ border: "none" }}
                            >
                              Service Details
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <NavLink to="/About" onClick={toggleMobileMenu}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Portfolio" onClick={toggleMobileMenu}>
                        Portfolio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact" onClick={toggleMobileMenu}>
                        Contact
                      </NavLink>
                    </li>
                  </ul>

                  <div className="mobile-contact">
                    <h3>Contact</h3>
                    <div className="contact-details">
                      <p>12/A, Mirnada City Tower, NYC</p>
                      <p>+000 123 (456)789</p>
                      <p>runokcontact@gmail.com</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
