import { useState } from "react";
import "./App.css";

function App() {

  let total1 =<>{Math.floor(Math.random() *1000)}</>
  const element = <h1>Hello World</h1>;
  const [imageUrl,setImageUrl] = useState("https://picsum.photos/100/200");
  const isloggedIn = false;
  function imageChange() {
    const total= Math.floor(Math.random() * 1000);
    alert("Image Changed");
    setImageUrl(`https://picsum.photos/100/200?random=${total}`);
    // window.location.reload();
  }
  return <>
  <h1>{isloggedIn?"Walcome":" Please login"} </h1>
    <h1>{element}</h1>
    <h1>{total1}</h1>
    <div>
        <img src={imageUrl} alt="Random" />
      </div>
    <button onClick={imageChange} style={{ backgroundColor: "green", color: "white" }}>
      Click Me
    </button>
    
  </>;
}




export default App;
