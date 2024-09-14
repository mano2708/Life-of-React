import { useState,useEffect } from "react";

import "./App.css"

function ControlledInput(){
      
      let [contInput,setConstInput] = useState("");
      
      const handleChange = (e) => {
            setConstInput(e.target.value)
            e.target.focus();
      }

      return (<><div>
            <input type="text" value={contInput} onChange={handleChange}/>
            <h2>{ contInput}</h2>
            </div></>);

}


export default ControlledInput;