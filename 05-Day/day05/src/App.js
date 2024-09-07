// React State Handling using Class Based as well as Functional Components



/* 
import React from "react"

class App extends React.Component {
      state={
            count:0}     

      increasestate = () => {
            this.setState({ count: this.state.count + 1 })
      }
      
      decreasestate = () => {
            this.setState({ count: this.state.count - 1});
      }

      resetstate = () => {
            this.setState({count:0})
      }


      render() {

            const cnt = this.state.count;
            return (<div>
                        <h1>{cnt}</h1>
                        <button onClick={() => this.increasestate()}>Increase state</button>
                        <button onClick={() => this.decreasestate()}>Decrease state</button>
                        <button onClick={() => this.resetstate()}>Reset</button>


                  </div>)
      }

      
}

export default App */


// Image Carousel using State in React




import React ,{useState} from "react"
import "./App.css"

import img1 from "./assets/1st.JPG"
import img2 from "./assets/2nd.JPG"
import img3 from "./assets/3rd.JPG"
import img4 from "./assets/4th.JPG"




function ImageCarsoul(){
      let imgArray = [img1,img2,img3,img4];
      let [currImg,setImgCount] = useState(0);

      const perviousImg =() =>{
            if(currImg>0){
                  setImgCount(currImg-1);
            } else {
                  setImgCount(3);
            }
      }

      const nextImg =() =>{
            if(currImg<3){
                  setImgCount(currImg+1);
            } else {
                  setImgCount(0);
            }
      }

      return (<>
                  <div className="image">
                        <img src={imgArray[currImg]}></img>
                        <div>
                              <button onClick={perviousImg} >Previous</button>
                              <button onClick={nextImg} >Next</button>
                        </div>
                  </div>
            </>)
}







// Count Function Using States


function App() {
      const [count,setCount] = useState(0);

      function increaseCount(){
            if (count!="Cant be Neagative"){
                  setCount(count+1);
            }
            else {
                  setCount(1);
            }
      }

      const decreaseCount=()=>{
            if(count>0){
                  setCount(count-1);
            }
            else{
                  setCount("Cant be Neagative")
            }
      }

      const reset=()=>{
            setCount(0);
      }

      return (<>
                  <h1>{count}</h1>
                  <button onClick={increaseCount} className="btn">Increase Count</button>
                  <button onClick={decreaseCount} className="btn">Decrease Count</button>
                  <button onClick={reset} className="btn">Reset Count</button>
                  <ImageCarsoul/>
            </>)
}



export default App;