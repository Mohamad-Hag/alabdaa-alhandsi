import "./App.css";
import Floating from "./components/Floating";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Location from "./components/Location";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      {/* <div className="h-10 w-10 bg-blue-700 rounded-full fixed z-5"></div> */}
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
