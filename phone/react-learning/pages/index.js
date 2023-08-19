import React, {useEffect} from "react";
import { useState } from "react";
import { createRoot } from 'react-dom/client';

export default function Home(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    return(
        <section>
            <input
                type="text"
                required
                value={user}
                onChange={(e)=>setUser(e.target.value)}
            />
            <input
                type="text"
                required
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
            />
            <h2>{ user }</h2>
            <h2>{ pass }</h2>
        </section>
        );
}

/* const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />); */
/*     roller = document.getElementById("hi");
    roller.innerhtml = "red";
 */