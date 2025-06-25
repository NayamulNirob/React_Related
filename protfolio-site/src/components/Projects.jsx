function Project(){
     const projects = [
    { title: "Project 1", description: "Description of Project 1",link:"a" },
    { title: "Project 2", description: "Description of Project 2",link:"b" },
    { title: "Project 3", description: "Description of Project 3",link:"c" },
  ];

  const images = {
    profile: "https://example.com/profile.jpg",
    project1: "https://example.com/project1.jpg",
    project2: "https://example.com/project2.jpg",
    project3: "https://example.com/project3.jpg",
  };
    
    return(
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
    );
}

export default Project;