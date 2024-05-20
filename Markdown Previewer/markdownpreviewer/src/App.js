import { useState } from "react";
import { marked } from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import Textarea from "./components/Textarea";
import PreviewMarkDown from "./components/PreviewMarkDown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState(`
# Encabezado de nivel 1
## Encabezado de nivel 2

[Enlace a Google](http://google.com)

Aquí hay algo de \`<h1>Hello World</h1>\`.

\`\`\`
const handleChange = (e) => {
  e.preventDefault();
  setMarkdown(e.target.value);
};
\`\`\`

- Elemento de lista

> Esto es una cita en bloque

![Logo de C Sharp](https://th.bing.com/th/id/OIP.vW3nB-vvTr0kGurVPLxkMAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7)

**Este es un texto en negrita**`);


  const handleChange = (e) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  const createMarkup = () => {
    /***
     * En este código, marked.setOptions({ sanitize: true });
     * habilita la opción de sanitización en marked, lo que
     * ayuda a prevenir ataques XSS al limpiar el HTML
     * **/
    marked.setOptions({
      sanitize: true,
      /*
       *implementar la funcionalidad de interpretar los retornos de carro y renderizarlos 
       *como elementos <br> en un visor de Markdown
       */ 
      breaks: true,
    });

    const html = marked(markdown);

    return { __html: html };
  };
  return (
    <>
      <Textarea value={markdown} onChange={handleChange} />
      <PreviewMarkDown
        previewmarkdown={createMarkup()}
        
      />
    </>
  );
}
