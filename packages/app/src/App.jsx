// @ts-ignore
import logo from "./logo.svg";
import "./App.css";
import { MyLabel } from "components";
import { sayHello } from "utils/lib";
import { myFunc, myAnotherFunc } from "utils-es6/lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyLabel text={"Component works!"} />
        <br />
        {sayHello("there")}
        <br />
        {myFunc("test")}
        <br />
        {myAnotherFunc("test2")}
      </header>
    </div>
  );
}

export default App;
