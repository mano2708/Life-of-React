# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Hooks

## useState() 
   This hook is specialised in handling states within a component.

## useEffect()
   This hook is responsible for data intialization and when to re-run / re-render the block of code inside it.

   => useEffect() takes two arguments name a callback func and an optional argument that controls the rendering of the component.
      => This optional arg can be either nothing, or an empty array, or an array of elements.
         => In case of nothing, the effect will run for each and every render.
         => In case of an empty array the effect will run only one time only the time of mounting.
         => Finally the array of elements, Once the values of an array element changes, the effect will be run

## useContext()
   This hook is used handle prop drill in the component tree by providing the Context API.
   The Context API hsa two components namely a Provider and a Consumer.
      => The provider is used to define the context that can be accessed globally.
      => The consumer is used to accessed the context defined by provider.
   Eg.:  File1.jsx

         import { createContext } from "react"; 

         export default const SampleContext = createContext();

         File2.jsx

         import { useState } from "react";
         import SampleContext from "./File1.jsx";

         export default function Sample({ children }){
            let [ samp , setSamp ] = useState(true);

            const toggleSample = () => {
               setSamp(!samp);
            }

            return (
               <SampleContext value={{ samp , toggleSample }}>
               {children}
               </SampleContext>
            );
         }

         File3.jsx

         import { useContext } from "react";
         import Sample from "./Sample.jsx";

         export default function TryingSample(){
            let [ samp1 , setSamp1 ] = useContext(Sample); 
            return (<>
               <h2>{sampl1 === true ? "Sample context passed and samp1=true" : "Sample Context passed and sampl1 = false"}</h2>
            </>)
         }

   Finally surround the main component within the Provider componen like 
         ReactDOM.render(<Sample>
         <App />
         </Sample>)