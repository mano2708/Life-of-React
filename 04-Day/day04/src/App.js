import "./App.css"



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

/* 
for(let i = 1 ; i<32 ; i++ ){
      console.log(evenOddPrime(i),i);
} */







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