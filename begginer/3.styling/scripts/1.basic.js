const element = (
  <div>
    <div
      className="box box--small"
      style={{ fontStyle: "italic", backgroundColor: "lightblue" }}
    >
      small lightblue box
    </div>
    <div
      className="box box--medium"
      style={{ fontStyle: "italic", backgroundColor: "pink" }}
    >
      medium pink box
    </div>
    <div
      className="box box--large"
      style={{ fontStyle: "italic", backgroundColor: "orange" }}
    >
      large orange box
    </div>
    <div className="box" style={{ fontStyle: "italic" }}>
      size-less box
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
