// store the state
const state = { eventCount: 0, username: "" };

function App() {
  return (
    <div>
      <p>There have been {state.eventCount} events.</p>
      <p>
        <button>Click Me</button>
      </p>
      <p>You typed: {state.username?.toUpperCase()}</p>
      <p>
        <input value={state.username} />
      </p>
    </div>
  );
}

function renderApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

// initial render
renderApp();
