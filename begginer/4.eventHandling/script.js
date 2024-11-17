// store the state
const state = { eventCount: 0, username: "" };

function App() {
  function handleClick() {
    setState({ eventCount: state.eventCount + 1 });
  }

  function handleChange(event) {
    setState({ username: event.target.value });
  }

  return (
    <div>
      <p>There have been {state.eventCount} events.</p>
      <p>
        <button onClick={handleClick}>Click Me</button>
      </p>
      <p>You typed: {state.username?.toUpperCase()}</p>
      <p>
        <input onChange={handleChange} value={state.username} />
      </p>
    </div>
  );
}

function setState(newState) {
  Object.assign(state, newState);
  // force render
  renderApp();
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// initial render
renderApp();
