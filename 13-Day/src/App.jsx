import React from 'react'
import { BrowserRouter ,Link , Routes, Route } from 'react-router-dom';


function Home () {
   return (<p>this is home</p>)
}

function Contact () {
   return (<p>this is Contact</p>)
}

function About () {
   return (<p>this is About</p>)
}




function Navigation() {
   return (
     <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
     </nav>
   );
 }




function App() {
  return (<>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

  </>);
}


export default App
