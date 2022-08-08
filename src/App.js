import About from "./About";
import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import TopBar from "./topbar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
