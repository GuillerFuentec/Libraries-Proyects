import "./App.css";
import Display from "./components/Display";
import Drumpad from "./components/DrumPad";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <Layout>
        <Drumpad />
        <Display/>
      </Layout>
    </>
  );
}
