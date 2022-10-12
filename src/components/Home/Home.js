import React,{useState,useEffect} from "react";
import Base from "../Base"
import "./home.css"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
const Home = ()=>{
    const[height, setHeight] = useState(0);
  
    useEffect(() => {           
      const onScroll = () => setHeight(window.pageYOffset);
      console.log(height);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, [height]);
    
    const scrollTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }
    return(
        <Base>
            <div className="home-container">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {height > 400?<button onClick={scrollTop} className="scrolltop">Up</button>:<div></div>}
            </div>
            
        </Base>
    )
}

export default Home;