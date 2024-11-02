import React from "react";
import { Logo } from "./components/Logo/Logo";
import "./resources/css/index.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneSquare,
  faEnvelopeSquare,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { LogoSizeTypes } from "./components/Logo/constants";
import images from "./resources/data/images";
import contact from "./resources/data/contact";
import { WeatherWidget } from "./components/WeatherWidget";
import { VehicleCallery } from "./components/VehicleCallery/VehicleCallery";

function App() {
  return (
    <>
      {/* Header */}
      <header className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <Logo size={LogoSizeTypes.medium} className="img-fluid" />
          </div>
        </div>

        <div className="row bg-light text-primary p-3">
          <div className="col-12 col-md d-flex justify-content-md-center align-items-center mt-1 mt-md-0 gap-2">
            <FontAwesomeIcon icon={faPhoneSquare} size="2x" />
            <a
              href={contact.phone.link}
              title="Phone"
              rel="noreferrer"
              className="link-underline link-underline-opacity-0"
            >
              {contact.phone.text}
            </a>
          </div>
          <div className="col-12 col-md d-flex justify-content-md-center align-items-center mt-1 mt-md-0 gap-2">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            <a
              href={contact.facebook.link}
              target="_blank"
              title="Facebook"
              rel="noreferrer"
              className="link-underline link-underline-opacity-0"
            >
              {contact.facebook.text}
            </a>
          </div>
          <div className="col-12 col-md d-flex justify-content-md-center align-items-center mt-1 mt-md-0 gap-2">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />
            <a
              href={contact.email.link}
              target="_blank"
              title="Email"
              rel="noreferrer"
              className="link-underline link-underline-opacity-0"
            >
              {contact.email.text}
            </a>
          </div>
          <div className="col-12 col-md d-flex justify-content-md-center align-items-center mt-1 mt-md-0 gap-2">
            <FontAwesomeIcon icon={faClock} size="2x" />
            <span>00-24 working time</span>
          </div>
          <div className="col-12 col-md d-flex justify-content-md-center align-items-center mt-1 mt-md-0 gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            <span>Paphos, Cyprus</span>
          </div>
        </div>
      </header>

      <main className="container">
        {/* Social Top Section  */}
        <section className="row row-cols-1 row-cols-md-2">
          <div className="d-flex flex-row align-items-center">
            <div className="image-wrapper">
              <img src={images.womanWithBags} className="img-fluid" alt="" />
            </div>
            <div className="fs-7 fw-bold text-dark">
              24/7 Taxi Service <br />
              Airport Transfers <br />
              Excursions all over the island
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className="image-wrapper">
              <img src={images.cyprusFlag} className="img-fluid" alt="" />
            </div>
            <div className="fs-7 fw-bold text-dark">
              Welcome to Cyprus <br />
              Welcome to Paphos <br />
              Welcome to our Island
            </div>
          </div>
        </section>

        {/* Sections Container */}
        <section className="d-flex row row-cols-1 row-cols-md-3 mt-2 card-group gap-2">
          {/* Taxi Services Card */}
          <div className="card border-0">
            <img src={images.taxiServices} alt="" />
            <div className="card-body">
              <div className="card-title fs-5 fw-bold">Taxi Services</div>
              <div className="card-text">
                For safe taxi services and transportation 24 hours a day, you
                can trust our professional and experienced drivers, island wide
                no trip too small or big with safety at hand at all times
              </div>
            </div>
          </div>
          {/* Airport Transfers Card */}
          <div className="card border-0">
            <img src={images.airportTransfers} alt="" />
            <div className="card-body">
              <div className="card-title fs-5 fw-bold">Airport Transfers</div>
              <div className="card-text">
                Safe and trustworthy airport transfers arrivals and departures
                island wide 24 hours professional service
              </div>
            </div>
          </div>
          {/* Excursions Card */}
          <div className="card border-0">
            <img src={images.excursions} alt="" />
            <div className="card-body">
              <div className="card-title fs-5 fw-bold">
                Excursions all over the island
              </div>
              <div className="card-text">
                Adventurous tours island wide to ensure you a memorable stay,
                experience the beauty, taste the flavors and feel safe with us
                here on the island of Aphrodite, the island of love
              </div>
            </div>
          </div>
        </section>

        <section className="container mt-2">
          <VehicleCallery />
        </section>

        <section className="container mt-2">
          <div className="row row-cols-1 row-cols-md-2 gap-2 gap-md-0">
            <div className="widget">
              <div className="card h-100">
                <div className="card-header bg-danger text-light">
                  Contact us
                </div>
                <div className="card-body">
                  <div className="row row-cols-1 text-primary pb-2">
                    <div className="d-flex align-items-center mt-2">
                      <FontAwesomeIcon
                        icon={faPhoneSquare}
                        size="2x"
                        className="me-2"
                      />
                      <a
                        href={contact.phone.link}
                        title="Phone"
                        rel="noreferrer"
                        className="link-underline link-underline-opacity-0"
                      >
                        {contact.phone.text}
                      </a>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        size="2x"
                        className="me-2"
                      />
                      <a
                        href={contact.facebook.link}
                        target="_blank"
                        title="Facebook"
                        rel="noreferrer"
                        className="link-underline link-underline-opacity-0"
                      >
                        {contact.facebook.text}
                      </a>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <FontAwesomeIcon
                        icon={faEnvelopeSquare}
                        size="2x"
                        className="me-2"
                      />
                      <a
                        href={contact.email.link}
                        target="_blank"
                        title="Email"
                        rel="noreferrer"
                        className="link-underline link-underline-opacity-0"
                      >
                        {contact.email.text}
                      </a>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        size="2x"
                        className="me-2"
                      />
                      <span>Paphos, Cyprus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget">
              <div className="card h-100">
                <div className="card-header bg-danger text-light">Weather</div>
                <div className="card-body">
                  <WeatherWidget />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container">
        <div className="row row-cols-1 row-cols-md-2 py-5">
          <div className="d-flex justify-content-center align-items-center gap-1">
            <span>2021</span>
            <span>Copyright</span>
            <a
              rel="noreferrer"
              className="link-underline link-underline-opacity-0 fw-bold"
              href="https://www.taxi4u-cy.com"
            >
              taxi4u-cy.com
            </a>{" "}
          </div>

          <div className="d-flex justify-content-center align-items-center gap-2">
            <span>Developed by</span>
            <a
              rel="noreferrer"
              className="link-underline link-underline-opacity-0 fw-bold"
              href="https://www.linkedin.com/in/spasimirkirov/"
              target="_blank"
            >
              Spasimir Kirov
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
