export default function PreviewMarkDown({ previewmarkdown, ...props }) {
  return (
    <>
      <div className="grid my-8 w-1/2 card-p place-items-center">
        <div className="card glass">
          <div className="card-body p-0">
            <h2 className="text-center card-title h2-preview">Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={previewmarkdown}></div>
          </div>
        </div>
      </div>
    </>
  );
}
