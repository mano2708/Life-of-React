import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import { useState } from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faToggleOn, faToggleOff , faBars} from "@fortawesome/free-solid-svg-icons"
import Home from "../Home/Home";
import Forms from "../Forms/Forms";

import profilePic from "../assets/profile.jpg"

import style from "./NavBar.module.css"




function NavBar(){

      let [ darkMode , setdarkMode ] = useState(faToggleOn);
      let [ dropDownMenu , setdropDownMenu ] = useState(style.dropDownMenuDisabled);

      const toggleDropDownMenu = () => {
            setdropDownMenu(dropDownMenu === style.dropDownMenu ? style.dropDownMenuDisabled : style.dropDownMenu);
      }



      const toggleDarkMode = () => {
            setdarkMode(darkMode===faToggleOn ? faToggleOff : faToggleOn)
      }


      
      return (<>
      <Router>
            <header>
                  <div className={style.profileContainer}>
                        <img className={style.profilePic} src={profilePic} alt=""/>
                        <h2 className={style.portfolio}>My Portfolio</h2>    
                  </div>
                  <div className={style.mainNav}>
                        <ul>
                              <Link to="/home"><li>Home</li></Link>
                              <li>Skills</li>
                              <li>Project</li>
                              <li>Contact</li>
                              <Link to="/login"><li>Login</li></Link>
                        </ul>
                        <FontAwesomeIcon icon={darkMode} onClick={toggleDarkMode}/>
                        <FontAwesomeIcon icon={faBars} className={style.menuBtn} onClick={toggleDropDownMenu} />
                  </div>
                  <div className={dropDownMenu}>
                        <Link to="/home"><li>Home</li></Link>
                        <li>Skills</li>
                        <li>Project</li>
                        <li>Contact</li>
                        <Link to="/login"><li>Login</li></Link>
                  </div>
            </header>
            <Routes>
                  <Route path="/home" element={<Home/>}></Route>
                  <Route path="/login" element={<Forms/>}></Route>
            </Routes>
      </Router>
      </>);
}

export default NavBar;