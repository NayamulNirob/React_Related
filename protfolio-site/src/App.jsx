import "./App.css";
import About from "./components/About";
import Footer from "./components/App-footer";
import Header from "./components/App-header";
import Contact from "./components/contact";
import Project from "./components/Projects";

function App() {

  // const skills = [
  //   "HTML",
  //   "CSS",
  //   "JavaScript",
  //   "Java",
  //   "Dart",
  //   "SQL",
  //   "PL/SQL",
  //   "React",
  //   "Spring Boot",
  //   "Angular",
  //   "Oracle",
  //   "Oracle Apex",
  //   "Flutter",
  //   "My SQL",
  //   "Postgre SQL",
  // ];
  // const education = [
  //   {
  //     degree: "Bachelor of Science in Computer Science",
  //     institution: "University of Technology",
  //     year: "2020",
  //   },
  //   {
  //     degree: "Master of Science in Software Engineering",
  //     institution: "Tech University",
  //     year: "2022",
  //   },
  // ];
  // const experience = [
  //   {
  //     title: "Software Engineer",
  //     company: "Tech Solutions",
  //     duration: "2022 - Present",
  //     description: "Developing web applications using React and Node.js.",
  //   },
  //   {
  //     title: "Web Developer Intern",
  //     company: "Web Innovations",
  //     duration: "2021 - 2022",
  //     description: "Assisted in building responsive websites.",
  //   },
  // ];
  // const certifications = [
  //   {
  //     title: "Full Stack Web Development",
  //     institution: "Online Academy",
  //     year: "2023",
  //   },
  //   {
  //     title: "JavaScript Fundamentals",
  //     institution: "Code School",
  //     year: "2021",
  //   },
  // ];
  // const hobbies = [
  //   "Coding",
  //   "Reading Tech Blogs",
  //   "Traveling",
  //   "Photography",
  //   "Gaming",
  // ];
  // const languages = ["English (Fluent)", "Bangla (Native)"];
  // const socialLinks = 
  //   {github:"" ,
  //   linkedin: "" ,
  //    twitter: "" ,
  //    facebook: "" ,
  //    instagram: "" ,
  //   };

  return (
    <div className="App">
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
