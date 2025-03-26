import "./navbar.scss";
import { useState } from "react";
import clsx from "clsx";
import  {userData} from "../../libs/dummyData";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  
  return (
    <nav>
        <div className="left">  
          <a href="#" className="logo" >
            <img src='/logo.png' alt="" />
            <span>PacificEstate</span>
          </a>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Agents</a>
        </div>

        <div className="right"> 

          {user ? (
            <div className="user">
              <img src={userData.image} alt="" />
              <span>{userData.name}</span>
              <Link to="/profile" className="profile">
                  <div className="notification">3 </div>
                  <span>Profile</span>
              </Link>
            </div>
          ) : (<>
               <a href='#' className="signin">Sign in</a>
               <a href='#' className="signup">Sign up</a>
          </>
          )}
         

          <div className="menuIcon" >
            <img src='/menu.png' alt="" onClick={() => setOpen(!open)}/>
          </div>

          <div className= {clsx("menu", {active: open})} >
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Agents</a>
            <a href='#'>Sign in</a>
            <a href='#'>Sign up</a>
          </div>

        </div>
      
    </nav>
  )
}

export default Navbar


