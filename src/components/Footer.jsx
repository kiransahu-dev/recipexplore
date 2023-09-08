import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer container">
            <div className="footer-section">
                <p className="title">Recixplore.com</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2023 | All Rights Reserved. Made by <span>Kiran sahu</span>.</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p style={{color: "#6495ED"}}>kiransahu.dev@gmail.com</p>
                <p style={{color: "#FFD700"}}>+91-7978977047</p>
                <p>#2393 New Street IND</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <div className="cheif-icons">
                    <div>
                        Facebook <FontAwesomeIcon icon={faFacebook}  />
                    </div>
                    <div>
                        Twitter <FontAwesomeIcon icon={faTwitter}/>
                    </div>   
                    <div>
                        Instagram <FontAwesomeIcon icon={faInstagram}/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer;
