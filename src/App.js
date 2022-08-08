import About from "./About";
import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import Team from "./team/Team";
import TopBar from "./topbar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
      <Services />
      <Team />
    </div>
  );
}

export default App;
