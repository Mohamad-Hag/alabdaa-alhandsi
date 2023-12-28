import "./App.css";
import Floating from "./components/Floating";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Location from "./components/Location";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Floating />
      <div className="Content">
        <Intro />
        <Services />
        <Location />
      </div>
      <Footer />
    </div>
  );
}

export default App;
