//use props to conditionally show an alert

function Showalert(props) {
  if (props.condition) {
    return alert(props.message);
  }
}


//use useEffect to show an alert when a condition is met
// import { useEffect } from "react";

// function Showalert({ condition, message }) {
//   useEffect(() => {
//     if (condition) {
//       alert(message);
//     }
//   }, [condition, message]);

//   return null; 
// }

export default Showalert;
