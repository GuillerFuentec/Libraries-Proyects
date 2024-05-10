export default function PreviewMarkDown({ ...props }) {
  return (
    <div className="container-fluid preview-box">
      <div className="row">
        <div className="col-md-3">
          <label className="title-box-pm" id="editor">
            Preview Markdown
          </label>
          <canvas {...props} className="preview" id="preview"></canvas>
        </div>
        </div>
    </div>
  );
}
