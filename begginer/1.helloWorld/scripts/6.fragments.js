const rootElement = document.getElementById("root");

// const header = React.createElement("h1", null, "Hello World!");
// const subTitle = React.createElement("p", null, "React is fun!");
// const elem = React.createElement(React.Fragment, null, header, subTitle);

// return more than one element
// adding a DOM element might break the hierarchy
// empty or React.Fragment
const elem = (
  <>
    <h1>Hello World!</h1>
    <p>Say hi to React Fragments</p>
  </>
);
ReactDOM.render(elem, rootElement);
