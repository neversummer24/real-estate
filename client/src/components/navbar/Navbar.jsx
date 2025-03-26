import "./navbar.scss";
import { useState } from "react";
import clsx from "clsx";
import { userData } from "../../libs/dummyData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../libs/apiRequest";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = true;

  const [showLogout, setShowLogout] = useState(false);  // 控制弹框的显示和隐藏

  // 显示/隐藏登出框
  const toggleLogout = () => setShowLogout(!showLogout);

  const logout = async () => {
    try{
      const res = await apiRequest.post("auth/logout");
      localStorage.removeItem("user");
      navigate("/");
    }catch(err){
      console.log(err);
    }
  };

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
            <span onClick={toggleLogout}>{userData.name}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3 </div>
              <span>Profile</span>
            </Link>

            {/* 条件渲染登出框 */}
            {showLogout && (
              <div className="logout-modal">
                <div className="logout-content">
                  <h3>Are you sure you want to logout?</h3>
                  <button onClick={logout}>Logout</button>
                  <button onClick={toggleLogout}>Cancel</button>
                </div>
              </div>
            )}

          </div>
        ) : (<>
          <a href='#' className="signin">Sign in</a>
          <a href='#' className="signup">Sign up</a>
        </>
        )}


        <div className="menuIcon" >
          <img src='/menu.png' alt="" onClick={() => setOpen(!open)} />
        </div>

        <div className={clsx("menu", { active: open })} >
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


