import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackHomeButton from "./components/BackHomeButton/BackHomeButton";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackHomeButton />
    </div>
  );
};

export default App;
