import "./App.css";
import Navar from "./components/Navar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Navar />
      <div className="bg font">
        <Hero />
      </div>
      <Footer />
    </>
  );
}
