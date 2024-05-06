import Container from "./assets/Container";
import "../assets/Container.css"

export default function Navar() {
  return (
    <div className="container text-center">
      <div className="row pt-3">
        <div id="quote-box" className="d-flex align-items-center justify-content-center vh vw-100">
          <Container />
        </div>
      </div>
    </div>
  );
}
