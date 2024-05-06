import "../../assets/Container.css";

export default function Navar() {
  return (
    <div className="card cont">
      <div className="card-body">
        <p className="card-text" id="text">
          Some quick example text to on the card title and make up the bulk of
          the card's content.
        </p>
        <h6 id="author" className="author card-subtitle m-2 text-body-secondary">
          - Card subtitle
        </h6>
        <div className="empty"></div>
        <button type="button" id="tweet-quote" className=" m-2 btn btn btn-primary float-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
          </svg>
        </button>
        <button id="new-quote" type="button" className="m-2 btn btn-info float-end" >
          New Quote
        </button>
      </div>
    </div>
  );
}
