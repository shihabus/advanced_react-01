const rootElement = document.getElementById("root");

const elem1 = (
  <>
    <h1>Hello World!</h1>
    <p>React is fun!</p>
    <p>React is awesome!</p>
    <p>React is cool!</p>
  </>
);

// interpolate
const message1 = <p>React is fun!</p>;
const message2 = <p>React is awesome!</p>;
const message3 = <p>React is cool!</p>;
const elem2 = (
  <>
    <h1>Hello World!</h1>
    {message1}
    {message2}
    {message3}
  </>
);

// to make it reusable create functions
// we love DRY: DON'T REPEAT YOURSELF
// this is a component now. A function that returns a mark-up(element)
// parameters we pass to a component are called Props
const message = (props) => <p>{props.msg}</p>;

const elem3 = (
  <>
    <h1>Hello World! Say hi to Components</h1>
    {message({ msg: "React is fun!" })}
    {message({ msg: "React is awesome!" })}
    {message({ msg: "Shihab is cool!" })}
  </>
);

// to distinguish react custom elements from DOM elem use Uppercase the first letter
const Message = (props) => <p>{props.msg}</p>;

const elem4 = (
  <>
    <h1>Hello World! Say hi to Components</h1>
    <Message msg={"React is fun!"} />
    <Message msg={"React is awesome!"} />
    <Message msg={"React is cool!"} />
  </>
);

console.log("component", <Message />);
console.log("elem", <h1 />);

ReactDOM.render(elem4, rootElement);
