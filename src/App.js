import About from "./About";
import "./App.css";
import Gallery from "./gallery/Gallery";
import Help from "./help/Help";
import Home from "./home/Home";
import Services from "./services/Services";
import Team from "./team/Team";
import TopBar from "./topBar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Help />
    </div>
  );
}

export default App;
