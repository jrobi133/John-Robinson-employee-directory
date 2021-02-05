import React from "react";
import Gallery from "./components/Gallery";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchResultContainer from "./components/SearchResultContainer";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Gallery />
      </Wrapper>
    </div>
  );
}

export default App;
