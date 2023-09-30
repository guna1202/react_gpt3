import React from "react";
import "./footer.css";
import gpt3logo from "./../../assests/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section_margin">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <button type="button">Request Early Access</button>
      </div>
      <div className="gpt3__footer-end">
        <div className="gpt3__footer-end_heading">
          <img src={gpt3logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-end_links">
          <h4>Links</h4>
          <p>Emails</p>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
        </div>
        <div className="gpt3__footer-end_company">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact us</p>
        </div>
        <div className="gpt3__footer-end_git">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-license">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
