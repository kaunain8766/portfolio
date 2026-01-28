export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src="/portfolio.jpg" alt="Kaunain" className="avatar" />

      <h1>Md Kaunain Raza</h1>
      <p className="role">Computer Science Engineer</p>

      <div className="meta">
        <p>📍 India</p>
        <p>💻 Java · Python</p>
        <p>📧 kaunain8766@gmail.com</p>
      </div>

      <div className="socials">
        <a href="https://github.com/kaunain8766" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </div>

      <a href="/resume.pdf" className="resume-btn">Resume</a>
    </aside>
  );
}
