function Box(props) {
  return <div {...props} />;
}

const element = (
  <div>
    <Box
      className="box box--small"
      style={{ fontStyle: "italic", backgroundColor: "lightblue" }}
    >
      small lightblue box
    </Box>
    <Box
      className="box box--medium"
      style={{ fontStyle: "italic", backgroundColor: "pink" }}
    >
      medium pink box
    </Box>
    <Box
      className="box box--large"
      style={{ fontStyle: "italic", backgroundColor: "orange" }}
    >
      large orange box
    </Box>
    <Box>size-less box</Box>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
