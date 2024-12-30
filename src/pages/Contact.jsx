import { Link } from "react-router-dom";
import "../assets/styles/Contact.scss";
import Navbar from "../components/Navbar";
import img1 from "../assets/images/arrows.png";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { LuPhone } from "react-icons/lu";
import { SlClock } from "react-icons/sl";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="contact">
        <div className="banner">
          <div className="h1">
            <h1>Contact</h1>
          </div>
          <div className="subTitle">
            <Link to="/">RUNOK</Link>
            <img src={img1} alt="" />
            <p>CONTACT</p>
          </div>
        </div>
        <div className="container">
          <div className="contactContent">
            <p>CONTACT US</p>
            <h1>Let&apos;s working together</h1>
            <p>
              Thank you for your interest in Attach Web Agency. We&apos;re
              excited to hear from you and discuss...
            </p>
            <div className="contactList">
              <div className="listItem">
                <div className="icons">
                  <LiaMapMarkerAltSolid className="icon" />
                </div>
                <div className="content">
                  <h1>Our Address</h1>
                  <p>2690 Hilton Street Victoria Road, New York, Canada</p>
                </div>
              </div>
              <div className="listItem">
                <div className="icons">
                  <LuPhone className="icon" />
                </div>
                <div className="content">
                  <h1>Phone Number</h1>
                  <Link>(+65) - 48596 - 5789</Link>
                  <Link>hello@acadu.com</Link>
                </div>
              </div>
              <div className="listItem">
                <div className="icons">
                  <SlClock className="icon" />
                </div>
                <div className="content">
                  <h1>Hours of Operation</h1>
                  <p>Monday - Friday: 09:00 - 20:00</p>
                  <p>Sunday & Saturday: 10:30 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form action="">
              <div className="inputs">
                <input type="text" placeholder="First Name*" required />
                <input type="text" placeholder="Last Name*" required />
              </div>
              <div className="inputs">
                <input type="text" placeholder="Email address*" required />
                <input type="text" placeholder="Phone number*" required />
              </div>
              <div className="textarea">
                <textarea placeholder="Message*" required></textarea>
              </div>
            </form>
            <div className="button">
              <Link>Submit Message</Link>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", width: "98%", margin: "auto" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.04421512235!2d-118.74139772287542!3d34.02060844610474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1734633424577!5m2!1sen!2s"
            width="100%"
            style={{ margin: "auto" }}
            height="600"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
