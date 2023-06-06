import logo from "./logo.svg";
import "./App.css";
import Hero from "./Hero";
import Textbox from "./Textbox";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Hero title = "Text Wizard 🔮"/>
    <Textbox />
    </>
  );
}

export default App;
