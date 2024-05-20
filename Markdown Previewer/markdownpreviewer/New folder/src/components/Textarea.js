export default function Textarea({ ...props }) {
  return (
    <>
      <h6 className="card-subtitle text-body-secondary">
        Developed by 👻{" "}
        <a
          href="https://github.com/GuillerFuentec"
          target="_blank"
          rel="noreferrer"
        >
          Ghosts
        </a>
      </h6>
      <div className="container-fluid mb-3 mt-5  d-flex align-items-center justify-content-center">
        <div className="row cont">
          <div className="col-7 hd text-center">
            <label htmlFor="editor" className="editor-label form-label">
              Editor
            </label>
            <textarea
              {...props}
              className="glass form-control"
              id="editor"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
