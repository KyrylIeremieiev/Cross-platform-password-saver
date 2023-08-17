import React, {useEffect} from "react";
import { useState } from "react";
import { createRoot } from 'react-dom/client';
function setHTML(){
    useEffect(() => {
        var roller = document.getElementById("hi");
        roller.innerHTML = "red";
      }, [])
    console.log("works")
}
export default function Home(){
    const [title, setTitle] = useState('');
    return(
        <section>
            
        </section>
        );
}

/* const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />); */
/*     roller = document.getElementById("hi");
    roller.innerhtml = "red";
 */