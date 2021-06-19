import "./styles/main.scss";
import React from "react";
import "./App.scss";

const App = (props) => {
  return <div className={"wrapper"}>{props.children}</div>;
};

export default App;
