import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="content">
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

export default App;
