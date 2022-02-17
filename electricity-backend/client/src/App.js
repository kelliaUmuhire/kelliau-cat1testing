import logo from "./logo.svg";
// import "./App.css";
import GetToken from "./components/GetToken/GetToken";
import { useState } from "react";
import CheckToken from "./components/CheckToken/CheckToken";

function App() {
  const [pageI, setPageI] = useState(0);
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <h1 className="text-red-500">Hello</h1> */}

      {pageI === 1 ? (
        <GetToken />
      ) : pageI === 2 ? (
        <CheckToken />
      ) : (
        <div>
          <button onClick={() => setPageI(1)}>Get Token</button>
          <button onClick={() => setPageI(2)}>Check Token</button>
        </div>
      )}
    </div>
  );
}

export default App;
