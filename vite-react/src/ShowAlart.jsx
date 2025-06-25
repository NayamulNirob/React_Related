function Showalert({condition, message}) {
  if (condition) {
    return alert(message);
  }
    return null; // Return null if condition is false, no alert shown
}
export default Showalert;