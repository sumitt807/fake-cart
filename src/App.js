import React from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';
// import Home from "./pages/Home";

import GoalList from "./components/GoalList/GoalList";

function App() {
  const goalList = [
    { id: "cg1", text: "Hello" },
    { id: "cg2", text: "Test" },
    { id: "cg3", text: "Hello" },
  ];
  return (
    <div className="App">
      <GoalList items={goalList} />
    </div>
  );
}

export default App;