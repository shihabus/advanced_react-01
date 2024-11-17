function Greeting() {
  // hook: React APIs for special utilities
  // state change lead to render
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    // console.log("name", name);
  };

  console.log("RE-RENDER");

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
