import "./App.css";
import Greeting from "./components/Greetings";
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
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

      <ProfileCard
      name="John Doe"
      age={30}
      location="New York"
      bio="A software developer with a passion for coding and technology."
      hobbies={["Reading", "Traveling", "Gaming"]}
      occupation="Software Engineer"
      isMember={true}
      />,

      <ProfileCard
      name="Jane Smith"
      age={28}
      location="San Francisco"
      bio="A creative designer who loves art and innovation."
      hobbies={["Painting", "Photography", "Hiking"]}
      occupation="Graphic Designer"
      isMember={false}
      />
    </div>
  );
}

export default App;
