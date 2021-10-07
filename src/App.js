import React, { useState, useEffect } from "react";
import IssueCard from "./Components/IssueCard";
import "./App.css";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/issues")
      .then((res) => res.json())
      .then((issues) => setIssues(issues));
  }, []);

  return (
    <div className="App">



      {issues.map((element, index) => {
        return (
          <div key={index}>
            <IssueCard title={element.title} link={element.link} />
          </div>
        );
      })}


    </div>
  );
}

export default App;
