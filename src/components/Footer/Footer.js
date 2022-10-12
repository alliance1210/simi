import React from "react";
import "./footer.css"
import logo from '../../images/logo.png'
const Footer = () => {
    return(
        <div className="footer-container">
            <div className="foot-left">
                <p className="foot-heading">
                    ABOUT US
                </p>
                <div className="foot-line"></div>
                <p className="foot-body">
                We envisions to develop a society based on 
                legitimate rights, equity, justice, honesty, 
                social sensitivity and a culture of service 
                in which all are self-reliant.
                </p>
            </div>
            <div className="foot-center">
                <p className="foot-heading">
                    INITIATIVES
                </p>
                <div className="foot-line"></div>

                <p className="foot-body">
                <ul>
                        <li>
                            Khel Sangathan
                        </li>
                        <li>
                            Sukoon Parikram
                        </li>
                        <li>
                            Simmi Olympiads
                        </li>
                        <li>
                            Kalaankar Manch
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Sanskritik Setu
                        </li>
                        <li>
                            Sambhav Madad
                        </li>
                    </ul>
                </p>
            </div>
            <div className="foot-right">
                <p className="foot-heading">
                    HAVE QUESTIONS?
                </p>
                <div className="foot-line"></div>
                <p className="foot-body">
                    <ul>
                        <li>
                            Location - 	479, Baspadamka, Tehsil Pataudi, Gurugram, Haryana - 122503, India
                        </li>
                        <li>
                            Contact - (+91) 70152 - 95025
                        </li>
                        <li>
                            Mail - support@simmifoundation.org
                        </li>
                        
                    </ul>

                </p>
            </div>
        </div>
    )
}

export default Footer