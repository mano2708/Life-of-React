
import { BrowserRouter as Router, Link } from "react-router-dom"
import { useState } from "react";
import "./Login.css"

function Login() {
      let [msg, setMsg] = useState("Welcome Message");
      const mouseMove = () => {
            setMsg("Mouse moved on to the button")
      }

      const mouseOut = () => {
            setMsg("Mouse moved out the button")
      }

      const mouseEnter = () => {
            setMsg("Mouse moved Enter to the button")
      }

      const mouseLeave = () => {
            setMsg("Mouse moved LEAVE to the button")
      }


      return (<>
            <div className="login-container">
                  <h1>Login</h1>
                  <h2>{msg}</h2>
                  <input type="text" placeholder="User Name"/>
                  <input type="password" placeholder="Password" />
                  <textarea>Please write your comment ...</textarea>
                  <Link to="/"><button onClick={()=>true}>submit</button></Link>
                  <button onMouseMove={mouseMove} onMouseOut={mouseOut}>button</button>
                  <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Enter / Leave</button>
                  {/* <button onMouseMove={mouseMove} onMouseOut={mouseOut}>button</button> */}
                  
            </div>        
      </>)
}

export default Login;