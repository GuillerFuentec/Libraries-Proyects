export default function Textarea({ ...props }) {
  return (
    <div className="container-fluid mb-3 mt-5  d-flex align-items-center justify-content-md-center">
      <div className="row">
        <div className="col-6 hd text-center">
          <label htmlFor="exampleFormControlTextarea1" className="editor-label form-label">
            Example textarea
          </label>
          <textarea
            {...props}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
