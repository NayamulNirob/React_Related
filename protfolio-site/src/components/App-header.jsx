function Header() {
const name = "MD. NAYAMUL ISLAM";
  const profession = "Full Stack Developer";
  return (
    <header className="App-header">
      <h2>{name}</h2>
      <p>{profession}</p>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
