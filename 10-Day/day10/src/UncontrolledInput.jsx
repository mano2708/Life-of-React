import { useRef ,useState} from "react";

import "./App.css"

function UncontrolledInput(){
      
      const uncontInput= useRef();
      const [val,setVal] = useState("");
      const handleChange = () => {
            // alert(uncontInput.current.value);
            setVal(uncontInput.current.value);
            console.log(uncontInput);
            console.log(val);
            uncontInput.current.focus();
      }

      return (<><div>
            <input type="text" ref={uncontInput} />
            <button  onClick={handleChange}>Submit</button>
            <p>{val}</p>
            </div></>);
}

export default UncontrolledInput;