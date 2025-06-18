import "./App.css";
function welcomeMessage(name) {
  return <h1>Hello, {name}!</h1>;
}
function greeting(istrue) {
  return <h1>{istrue? 'Good Morning': 'Good Evining'}</h1>
}

function showalert(condition,message) {
  if(condition) {
   return alert(message);
  }
}

function App() {
  const now = new Date();
  const istrue = now.getHours() < 12;

  {showalert(istrue, "Good Morning! Have a great day!")}
  {showalert(!istrue, "Good Evening! Hope you had a nice day!")}

  return (
    <div>
    {welcomeMessage("Alice")}
    {welcomeMessage('Bob')}
    {welcomeMessage("Jhon")}
    {greeting(istrue)}
    <h2>Current Time: {now.toLocaleTimeString()}</h2>
    </div>
  
  )
}

export default App;
