import "https://unpkg.com/react@18/umd/react.production.min.js";
import "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js";

const rootElement = document.getElementById("root");
const element = React.createElement("div", {
  className: "container",
  children: "Hello World! Say Hi to React",
});

ReactDOM.render(element, rootElement);
