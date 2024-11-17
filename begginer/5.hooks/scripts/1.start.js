function Greeting() {
  let name = "";

  const handleChange = (event) => {
    name = event.target.value;
    // even though value change, React isn't able to detect the change
    // or we want a way to explicitly tell React to RE-RENDER and match the latest state of UI
    console.log("name", name);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));

// <label for=""/> --> <label htmlFor=""/>
