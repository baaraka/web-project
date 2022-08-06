import About from "./About";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topbar/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
