{
  /* 
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 
*/
}

const rootElement = document.getElementById("root");
const element = <div className="container">Hello World! Say hi to JSX</div>;
ReactDOM.render(element, rootElement);

console.log("element", element);
