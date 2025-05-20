import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home" className="pt-header">
          <Home />
        </div>
        <div id="projects" className="pt-16">
          <Projects />
        </div>
        <div id="about" className="pt-16">
          <About />
        </div>
        <div id="skills" className="pt-16">
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;