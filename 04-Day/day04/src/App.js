// Functional Component


/* import "./App.css"



function Box() {

      const nums = [...Array(32).keys()];

      const numsJsx = nums.map((num) =>     
            <h2 className="box" key={num} style={{backgroundColor:evenOddPrime(num)}}>{num}</h2>
      )
      return (<>
                  {numsJsx}
            </>)
}


function evenOddPrime(num){
      if (num<= 1)
            return "#4444ff"
      if ( num <= 3)
            return "#44ff44";
      if ( num%2 === 0 )
            return "#ff4444";
      if ( num%3===0 )
            return "#ffff44";

      for(let i=5 ; i*i <= num ; i+=6)
            if ( (num%i === 0) | ( num%(i+2) === 0))
                  return "#ffff44"
      return "#44ff44";
}


for(let i = 1 ; i<32 ; i++ ){
      console.log(evenOddPrime(i),i);
}







function App(){
      return (
            <>
                  <h1>Number Generator</h1>
                  <div className="boxes">
                        <Box/>
                  </div>
            </>
      );
}

export default App; 

*/




// Class Based Component


import React from "react"
import "./App.css"


class App extends React.Component {
      
      numJsx() {
            const nums = [...Array(32).keys()]

            const isEvenOddPrime = (num) => {
                  if ( num <= 1 ){
                        // Neither Prime nor not Prime
                        return "#2222ff";
                  }
                  else if ( num <=3 ){
                        // Prime
                        return "#44ff44"
                  }
                  else if ( num%2 === 0){
                        // Even
                        return "#ff2222"
                  }
                  else if ( num%3 === 0){
                        // Odd
                        return "#ffff00"
                  }
                  for ( let i = 0 ; i*i <= num ; i+=6){
                        if (num%i === 0 | num%(i+2) === 0){
                              // Odd
                              return "#ffff33"
                        }
                  }
                  // Prime
                  return "#44ff44"
            }

            return (
                  <div className="boxes">
                        {nums.map((num) => <h1 className="box" key={num} style={{backgroundColor:isEvenOddPrime(num)}}>{num}</h1>)}
                  </div>);
      } 

      render() {
            return (<>
                        <h1>Home</h1>
                        <this.numJsx />
                  </>);
      }
}


export default App