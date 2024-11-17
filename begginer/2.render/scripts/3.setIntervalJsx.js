const rootElement = document.getElementById("root");

// atmoic: only repaint where the actual update happens
// no complete render
// declarative focuses on what we want to get from the computer
// imperative tells the computer how to do things
function tick() {
  const time = new Date().toLocaleTimeString();
  const element = (
    <div>
      <h1>Time is: {time}</h1>
      <input value={time} />
    </div>
  );
  ReactDOM.render(element, rootElement);
}

setInterval(tick, 1000);
