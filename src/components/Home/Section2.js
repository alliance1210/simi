import React from "react";
import Img from '../../images/img4.png'
import './sec2.css'
const Section2 = () =>{
    return(
        <div className="sec2-container">
            <div className="sec2-left">
                <h2>Welcome to <span className="simmi">SIMMI</span></h2>
                <p>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; 
                    carrying out welfare projects on education, healthcare, livelihood and women empowerment. 
                    We believe that unless members of the civil society are involved proactively in the process of development, 
                    sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, 
                    making it an active partner in all its welfare initiatives.</p>
            </div>
            <div className="sec2-right">
                <img src={Img} alt='indian map' />
            </div>
        </div>
    )
}

export default Section2
