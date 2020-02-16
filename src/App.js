import React from "react";
import ReactDOM from "react-dom";
import MainSection from "./containers/MainSection";
import Header from "./containers/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainSection />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
