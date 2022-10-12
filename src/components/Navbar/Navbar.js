import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import "./nav.css"
import icon from "../../images/menu.svg"
import logo from "../../images/logo.png"
const Navbar = () => {
    const[show,setShow] = useState(false);
    const listMenu = () =>{
        setShow(prev=>!prev)
        console.log(show)
    }


    return(
        <div className="nav-container">
            <div className="left-nav">
                
                <p className="left-nav-left">
                    <img src={logo} alt="logo" />
                </p>
                <NavLink to="/" className="navlink" style={{textDecoration:"none", color:"white"}}> 
                <p className="left-nav-left">Simmi Foundation</p>
                </NavLink>
            </div>
            
            <div className={`right-nav ${show?"display":"hidden"}`}>
                <ul >
                <NavLink to="/home" className="navlink" style={{textDecoration:"none", color:"white"}}><li>Home</li></NavLink>
                    <li>About</li>
                    <li>Donate </li>
                    <li>Blog</li>
                    <li>Gallery</li>
                    <li>Volunteer</li>
                    <li>Events</li>
                    <li>Careers</li>
                    <li>Contact</li>

                </ul>
            </div>
            <div className="menu">
                <img src={icon} onClick={listMenu} alt="menu" />
            </div>
        </div>
    )
}

export default Navbar