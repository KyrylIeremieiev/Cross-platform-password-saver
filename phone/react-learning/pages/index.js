import React, {useEffect} from "react";
import { useState } from "react";
import { createRoot } from 'react-dom/client';

export default function Home(){
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const submit = () =>{
        fetch('localhost:8080/insert', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({'name':{user}, 'expansion':{pass}}), // body data type must match "Content-Type" header
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }
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
            <button
                value="submit"
                onClick={submit}
            />
        </section>
        );
}

/* const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />); */
/*     roller = document.getElementById("hi");
    roller.innerhtml = "red";
 */