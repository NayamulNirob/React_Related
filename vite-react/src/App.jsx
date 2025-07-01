import "./App.css";
import ChildComponents from "./components/ChildComponents";
import Greeting from "./components/Greetings";
import MyButton from "./components/MyButton";
import ProfileCard from "./components/ProfileCard";
import Showalert from "./components/ShowAlart";
import WelcomeMessage from "./components/WelcomeMessage";
import React, { useState } from 'react';

function App() {
  const now = new Date();
  const istrue = now.getHours() < 12;

  const [count, setCount] = useState(0);


  const handleSkillsClick = (skill) => {
    alert(`You clicked on the Skill: ${skill}`);
  };


  const jhonProfile={
      name:"John Doe",
          age:30,
          location:"New York",
          bio:"A software developer with a passion for coding and technology.",
          hobbies:["Reading", "Traveling", "Gaming"],
          skills:["Java", " JavaScript", " React", " Flutter"],
          onSkillsClick:handleSkillsClick,
          occupation:"Software Engineer",
          isMember:true
  };

  return (
    <div>
      <WelcomeMessage name="Alice" />
      <WelcomeMessage name="Bob" />
      <WelcomeMessage name="Lion" />
      <Greeting istrue={istrue} />
      <div>Count : {count}</div>
      <MyButton  count={count} setCount={setCount}/>
      <Showalert condition={istrue} message="Good Morning! Have a great day!" />
      <Showalert
        condition={!istrue}
        message="Good Evening! Hope you had a nice day!"
      />

      <div> 
        <ChildComponents buttonName="Hello"/>
      </div>
      <h2>Current Time: {now.toLocaleTimeString()}</h2>

      <div className="app-container">
        <ProfileCard  {...jhonProfile}/>
        ,
        <ProfileCard
          name="Jane Smith"
          age={28}
          location="San Francisco"
          bio="A creative designer who loves art and innovation."
          hobbies={["Painting", "Photography", "Hiking"]}
          skills={["Photoshop", " Illustrator", " Figma"]}
          onSkillsClick={handleSkillsClick}
          occupation="Graphic Designer"
          isMember={false}
        />
      </div>
    </div>
  );
}

export default App;
