function Greeting() {
  const [name, setName] = React.useState(
    window.localStorage.getItem("name") || ""
  );

  // store the value in local storage so that it can persist b/w refresh
  // sideEffects
  React.useEffect(() => {
    window.localStorage.setItem("name", name);
    window.document.title = name;
  });

  const handleChange = (event) => setName(event.target.value);

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));

// controlled input: <input value={value} onChange={} />
