import { useState } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import Textarea from "./Components/Textarea";
import PreviewMarkDown from "./Components/PreviewMarkDown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };
  return (
    <>
      <Textarea value={markdown} onChange={handleChange} />
      <PreviewMarkDown previewmarkdown={createMarkup()} />
    </>
  );
}
