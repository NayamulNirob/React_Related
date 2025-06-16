import { useState } from "react";
import "./App.css";

function App() {

  const total =<>{5 + 6}</>
  const element = <h1>Hello World</h1>;
  const [imageUrl,setImageUrl] = useState("https://picsum.photos/100/200");
  const isloggedIn = false;
  function imageChange() {
    alert("Image Changed");
    setImageUrl(`https://picsum.photos/100/200?random=${Math.floor(Math.random() *1000)}`);
  }
  return <>
  <h1>{isloggedIn?"Walcome":" Please login"} </h1>
    <h1>{element}</h1>
    <h1>....................,{total},..................</h1>
    <div>
        <img src={imageUrl} alt="Random" />
      </div>
    <button onClick={imageChange} style={{ backgroundColor: "green", color: "white" }}>
      Click Me
    </button>
    
  </>;
}




export default App;
