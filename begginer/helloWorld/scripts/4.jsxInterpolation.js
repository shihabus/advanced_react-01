const rootElement = document.getElementById("root");

const elem1 = <div className="container">Hello World! Say 👋 to JSX</div>;

const children = "Hello World! Say 👋 to JSX Interpolation";
const className = "container";
const elem2 = <div className={className}>{children}</div>;

const props = { children, className };
// spread operator
const elem3 = <div {...props} />;

const text = "javascript";
// use expression inside JSX
const elem4 = (
  <div className="container">
    <h1>Say 👋 to {text}!</h1>
    <p>Text is {text.length} characters long</p>
  </div>
);

// use conditionals
const elem5 = (
  <div className="container">
    <h1>Say 👋 to {text}!</h1>
    {text.length > 6 ? <h3>Too long 😬</h3> : <h4>Short 🤗</h4>}
  </div>
);

ReactDOM.render(elem5, rootElement);
