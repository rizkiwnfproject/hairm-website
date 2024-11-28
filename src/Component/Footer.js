import React from "react";
import { FaInstagram, FaEnvelopeOpenText, FaGooglePlay} from 'react-icons/fa/';


function Footer() {
  return (
    <React.StrictMode>
      <div id="footer">
        <div className="footer-content">
          <div className="row footer-row">
            <div className="first-col-footer col-md-4">
              <div className="description">
                <h3>Hair<span>M</span></h3>
                <p>HairM merupakan sebuah aplikasi yang memberikan referensi model potongan rambut terpopuler serta bisa membantu menentukan model potongan rambut terbaik yang cocok dengan anda!</p>
              </div>
            </div>
            <div className="second-col-footer col-md-3">
              <div className="about-the-app">
                <h3>About Hair<span>M</span></h3>
                <ul>
                  <li><a href="/#home">Home</a></li>
                  <li><a href="/#information">Information</a></li>
                  <li><a href="/#feature">Feature</a></li>
                  <li><a href="/#model">Model</a></li>
                  <li><a href="/#teams">Teams</a></li>
                </ul>
              </div>
            </div>
            <div className="third-col-footer col-md-3">
              <div className="our-socialmedia">
                <h3>Our Social Media</h3>
                <ul>
                  <li>< FaEnvelopeOpenText /> <a href="#"> kelompokB3PENS@gmail.com</a></li>
                  <li>< FaInstagram /> <a href="#"> Instagram</a></li>
                  <li>< FaGooglePlay /> <a href="https://play.google.com/store/apps/details?id=com.cukuran.hairm&gl=US">Google Play</a></li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
        <div className="copyright-content">
          <p>Copyright © HairM</p>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
