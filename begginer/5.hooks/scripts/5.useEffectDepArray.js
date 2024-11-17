function Greeting() {
  // ran only during initial render
  const [name, setName] = React.useState(() => {
    return window.localStorage.getItem("name") || "";
  });

  // run only if dep change
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
  React.useEffect(() => {
    console.log("Greeting: useEffect");
    window.localStorage.setItem("name", name);
    window.document.title = name;
  }, [name]);

  const handleChange = (event) => setName(event.target.value);

  console.log("Greeting: re-render");

  return (
    <div style={{ paddingBlock: "1rem", backgroundColor: "lightblue" }}>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function App() {
  const [count, setCount] = React.useState(0);

  console.log("App: re-render");

  return (
    <>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment count</button>
      <Greeting />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// One way data flow
// Parent re-render -> Child re-render: to keep state updated
