import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,
        faTwitter,
        faInstagram,
        faYoutube,
        faLinkedin} from "@fortawesome/free-brands-svg-icons";




function Footer(props){
    return(<footer id="footer" className="text-white">
        <div className="container my-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <h1 className="mt-4">AweShop</h1>
                <p>Subscribe to our email alerts</p>
                <div className="subscribe-input">
                    <input type="email" placeholder="Email Address" name="email" id="email"></input>
                    <a className="btn custom-btn subscribe-btn">SUBSCRIBE</a>
                </div>
                <div className="social-icons mt-3">
                   <a className="social-icon" href="#"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                   <a className="social-icon" href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                   <a className="social-icon" href="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                   <a className="social-icon" href="#"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                   <a className="social-icon" href="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                </div>
              </div>
              <div className="col-6 col-lg-2">
               <div className="footer-links">
               <h6>SHOP</h6>
                <a href="#" className="footer-link">Smart Watch</a>
                <a href="#" className="footer-link">Analog</a>
                <a href="#" className="footer-link">Digital</a>
                <a href="#" className="footer-link">Hybrid</a>
                <a href="#" className="footer-link">Quartz</a>
                <a href="#" className="footer-link">Luxury</a>
               </div>
              </div>
              <div className="col-6 col-lg-2">
               <div className="footer-links">
               <h6>Help</h6>
                <a href="#" className="footer-link">Warranty & Support</a>
                <a href="#" className="footer-link">Track Your Order</a>
                <a href="#" className="footer-link">Return Policy</a>
                <a href="#" className="footer-link">Service Centers</a>
                <a href="#" className="footer-link">FAQs</a>
               </div>
              </div>
              <div className="col-6 col-lg-2">
               <div className="footer-links">
               <h6>Company</h6>
                <a href="#" className="footer-link">About</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Privacy Policy</a>
               </div>
              </div>
            </div>
        </div>
        <p className="mb-0 pb-2 text-center"> &#169; 2022 AweShop </p>
    </footer>);
}

export default Footer;