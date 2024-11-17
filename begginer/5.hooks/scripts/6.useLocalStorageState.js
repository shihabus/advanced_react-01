function useLocalStorageState(key, defaultValue = "") {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue
  );

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}

function Greeting() {
  const [state, setState] = useLocalStorageState("name");

  const handleChange = (event) => setState(event.target.value);

  return (
    <div style={{ paddingBlock: "1rem", backgroundColor: "lightblue" }}>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={state} onChange={handleChange} id="name" />
      </form>
      {state ? <strong>Hello {state}</strong> : "Please type your name"}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));

// customHook can be name anything, starting with 'use' is a convention
// https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
