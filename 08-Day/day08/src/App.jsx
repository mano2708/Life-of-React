// import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"

import NavBar from "./NavBar/NavBar";
import Home from "./Home/Home";
import SideBar from "./SideBar/SideBar";

import "./App.css"

function App(){
      return (<>
            <NavBar/>
            <SideBar/>
      </>);
}

export default App;