import React from "react";
import './sec3.css'
import card1 from "../../images/card1.jpg"
import card2 from "../../images/card2.jpg"
import card3 from "../../images/card3.jpg"
import card4 from "../../images/card4.jpg"

const Section3 = () =>{
    return(
        <div className="sec3-container">
            <div className="sec3-title">
                Objectives
            </div>
            <div className="card-container">                
                <div className="card1">
                    <img src={card1} alt="Education"/>
                    <p className="card-title">
                        Education
                    </p>
                    <p className="card-body">
                        We provide free academic education, scholarship, training and other incentives to the children.
                    </p>
                    <p className="card-extension">
                        Read More....
                    </p>
                </div>
                <div className="card1">
                <img src={card2} alt="Education"/>
                    <p className="card-title">
                        Livelihood
                    </p>
                    <p className="card-body">
                        We implement various schemes to provide livelihood and uplift the poor in society.
                    </p>
                    <p className="card-extension">
                        Read More....
                    </p>
                </div>
                <div className="card1">
                <img src={card3} alt="Education"/>
                    <p className="card-title">
                        Healthcare
                    </p>
                    <p className="card-body">
                        We are increasing awareness on Sanitization and providing people with access to better nutrition, clean water and toilets.
                    </p>
                    <p className="card-extension">
                        Read More....
                    </p>
                </div>
                <div className="card1">
                <img src={card4} alt="Education"/>
                    <p className="card-title">
                        Women and Youth Empowerment
                    </p>
                    <p className="card-body">
                        We focus on providing equal opportunities for women in the work field.
                    </p>
                    <p className="card-extension">
                        Read More....
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Section3
