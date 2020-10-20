import React from "react";
import "./App.css";
import { useGetData } from "./hooks/useGetData";
import splitIntoTimeCards from "./helpers/splitIntoTimeCards";
import SchemaView from "./views/SchemaView";

function App() {
  const data = useGetData();

  if (data !== null) {
    var newlist = splitIntoTimeCards(data);

    return (
      <div className="App">
        <header className="App-header">
          <SchemaView data={newlist} />
        </header>
      </div>
    );
  } else return <div> loading...</div>;
}

export default App;
