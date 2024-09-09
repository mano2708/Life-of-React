import Login from "./Login";
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import "./App.css"

function App(){
      return (<>
      <Router>
            <Login></Login>

            <Routes>
                  <Route path="/login" element={<Login/>}/>
            </Routes>
      </Router>
      
      </>)
}

export default App;