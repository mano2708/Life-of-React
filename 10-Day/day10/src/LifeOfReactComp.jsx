import { useEffect,useState,useContext } from "react"


function LifeOfReactComp() {


      const [val ,setVal] = useState(0);

      useEffect (()=> {
            console.log("Component is mounted ",val);
            setVal(val+1);

            return () => {
                  console.log("Component is unmounted");
            }
      }, [100] )

      return (
            <div>

            </div>
      )
}

export default LifeOfReactComp
