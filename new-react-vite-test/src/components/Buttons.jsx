import { useState } from "react";

function Buttons(){
const [count, setCount] = useState(0);
    return(
        
        <div className="container">
        <h2>Set Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    )
}
export default Buttons;