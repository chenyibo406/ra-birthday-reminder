import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  return (
    <main>
      <section className="container">
        <h3>{data.length} Birthday today</h3>
        <List people={data} />
      </section>
    </main>
  );
}

export default App;
