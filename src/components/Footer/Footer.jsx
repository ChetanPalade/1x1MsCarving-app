import React from "react";
import { ListGroup } from "reactstrap";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={"https://as2.ftcdn.net/v2/jpg/01/22/73/15/1000_F_122731535_rS9NHcSHUVrxMP3cgVQD2p4qkEIEhyGP.jpg"} className="footer-img" alt="logo" />
        <h5>1 x 1 scheduler by MSCarving</h5>
        <p>Best student-mentor 1 on 1 scheduler,try it out!</p>
      </div>
      <div>
        <h5 className="follow-us">Follow us on</h5>
        <ListGroup>
        <div >
        <FaSquareXTwitter className="follow-us-icon border-0 ps-0"/>
        <FaFacebookSquare  className="follow-us-icon border-0 ps-0"/>
        <BsInstagram  className="follow-us-icon border-0 ps-0"/>
        </div>
        </ListGroup>
      </div>
      <div className='container-fluid  d-flex justify-content-center align-items-center text-white'>
      <p className='text-black m-0'>&copy;2024 MSCarvingChe</p>
    </div>
    </footer>
  );
};

export default Footer;


