import "./App.css";
import Greeting from "./components/Greetings";
import MyButton from "./components/MyButton";
import Showalert from "./components/ShowAlart";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  const now = new Date();
  const istrue = now.getHours() < 12;

  return (
    <div>
      <WelcomeMessage name="Alice" />
      <WelcomeMessage name="Bob"/>
      <WelcomeMessage name ="Lion"/>
      {/* {greeting(istrue)} */}
      <Greeting istrue={istrue}/>
      <MyButton />
      <Showalert condition={istrue} message="Good Morning! Have a great day!"/>
      <Showalert condition={!istrue} message="Good Evening! Hope you had a nice day!"/>
      <h2>Current Time: {now.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
