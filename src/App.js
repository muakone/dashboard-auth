import { useState, useEffect } from "react";
import "./App.css";
import Router from "./Routes/Router";

function App() {
  const [error, setError] = useState({ err: false, message: "" });

  const runError = (errMessage) => {
    setError({ err: true, message: errMessage });
    setTimeout(() => setError({ err: false, message: "" }), 3000);
  };

  return (
    <div className="App">
      <Router error={error} runError={runError} />
    </div>
  );
}

export default App;
