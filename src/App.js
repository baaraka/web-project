import About from "./about/About";
import "./App.css";
import Footer from "./footer/Footer";
import Gallery from "./gallery/Gallery";
import Help from "./help/Help";
import Home from "./home/Home";
import Questions from "./questions/Questions";
import Says from "./says/Says";
import Services from "./services/Services";
import Team from "./team/Team";
import TopBar from "./topbar/Topbar";
import Why from "./why/Why";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
      <Why />
      <Services />
      <Team />
      <Gallery />
      <Help />
      <Says />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
