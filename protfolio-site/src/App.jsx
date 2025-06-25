import "./App.css";
import Header from "./components/App-header";

function App() {
  const projects = [
    { title: "Project 1", description: "Description of Project 1",link:"a" },
    { title: "Project 2", description: "Description of Project 2",link:"b" },
    { title: "Project 3", description: "Description of Project 3",link:"c" },
  ];
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
  const images = {
    profile: "https://example.com/profile.jpg",
    project1: "https://example.com/project1.jpg",
    project2: "https://example.com/project2.jpg",
    project3: "https://example.com/project3.jpg",
  };
  return (
    <div className="App">
      <Header/>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate Full Stack Developer with experience in building
          dynamic web applications. I love coding and enjoy learning new
          technologies.
        </p>
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
        <div className="project-list">
          {projects.map(
            (project, index) => (
              (
                <div key={index} className='project-item'>
                  <h2>{project.title}:</h2> <h3>{project.description}</h3>
                  <a href={project.link} target="_blank" rel="noprojecttillnowadded">View Project</a>
                </div>

              ),
              (
                <img
                  src={images[`project${index + 1}`]}
                  alt={project.title}
                  className="project-image"
                />
              )
            )
          )}
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via email at{" "}
          <a href="mailto:nayamulislam@gmail.com">nayamulislam@gmail.com</a>
        </p>
      </section>

      <footer className="App-footer">
        <p>© 2025 My React App</p>
      </footer>
    </div>
  );
}
export default App;
