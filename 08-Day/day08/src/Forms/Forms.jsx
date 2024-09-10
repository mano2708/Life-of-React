import "./Forms.css"
import { Evaluatename , EvaluatePassword} from "../utilities/EvaluateForms";
import { useState } from "react";


function Forms(){

      let [username , setUsername] = useState("");      
      let [password , setPassword] = useState("");

      const evaluate =() => {
            setUsername(<p>{Evaluatename(userName.value)}</p>);
            setPassword(<p>{EvaluatePassword(passWord.value)}</p>);
      }

      return (<div className="loginForm" >
            <h1>Login</h1>
            <input type="text" placeholder="Username"  id ="userName" required></input>
            {username}
            <input type="password" id="passWord" placeholder="Password" required />
            {password}
            <button type="submit" 
            onClick={() => {
                  evaluate()
            }}>Login</button>
      </div>);
}

export default Forms;