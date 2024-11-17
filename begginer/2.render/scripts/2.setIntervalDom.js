const rootElement = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();
  const element = `
  <div>
    <h1>Time is: ${time}</h1>
    <input value=${time}></input>
  </div>
  `;
  rootElement.innerHTML = element;
}

setInterval(tick, 1000);
