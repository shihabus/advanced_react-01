const rootElement = document.getElementById("root");

const time = new Date().toLocaleTimeString();
const elem1 = (
  <div>
    <h1>Time is: {time}</h1>
  </div>
);

ReactDOM.render(elem1, rootElement);
