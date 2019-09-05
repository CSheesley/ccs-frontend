import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import { serviceText1, serviceText2 } from '../../utils/text.js';
import Water from '../../assets/images/water.png';
import Logo from '../../assets/images/CCS_Vertical_Reversed.png';

export const HomePage = () => (
  <main className="home-page">
    <img src={Water} className="water-img" alt="view from underwater" aria-hidden="true" />
    <h2 className="home-heading">
      When you're feeling
      <span className="under-water-span">Under Water</span>
    </h2>
    <h3 className="help-hours-heading">
      Select an option to get
      <br />
      no cost, confidential help
      <strong> NOW</strong>
    </h3>
    <nav aria-label="Three ways to access help right now:" className="btn-links-wrapper">
      <Button kind="call" size="large" />
      <Button kind="text" size="large" />
      <Button kind="walk-in" size="large" />
    </nav>
    <h4 className="home-hours help-hours-heading">All services available 24/7/365</h4>
    <p className="service-desc-p" role="complementary">
      {serviceText1}
      <a className="phone-num-link inline-link" href="tel: +1-844-493-8255">
        +1-844-493-TALK
      </a>
      (8255), or
      <a className="text-link inline-link" href="/">
        text TALK to 38255
      </a>
      {serviceText2}
      <a className="ccs-website-link inline-link" href="https://coloradocrisisservices.org/">
        ColoradoCrisisServices.org.
      </a>
    </p>
    <footer className="info-links-footer">
      <NavLink className="learn-more-link footer-link btn" to="/more-info">
        Service Info/FAQs
      </NavLink>
      <NavLink className="all-centers-link footer-link btn" to="/all-centers">
        All Walk-In Centers
      </NavLink>
      {/* <NavLink
        className="dev-team-link footer-link btn"
        to="/more-info"
      >
          Development Team
      </NavLink> */}
      <a className="ccs-link-footer" href="https://coloradocrisisservices.org/">
        <img
          src={Logo}
          className="ccs-logo-img"
          alt="Colorado Crisis Services logo with swirly tree, link to home page"
        />
      </a>
    </footer>
  </main>
);

export default HomePage;
