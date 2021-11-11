import React, { useState, useEffect } from "react";
import IssueCard from "./Components/IssueCard";
import Table from "react-bootstrap/Table";
import "./App.css";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("https://hacktoberfest-issues.herokuapp.com/issues")
      .then((res) => res.json())
      .then((issues) => setIssues(issues));
  }, []);

  return (
    <div className="App">
      <Table striped hover>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Created On</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((element, index) => {
        return (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{element.createdAt}</td>
          <td key={index}>
            <IssueCard title={element.title} link={element.link} labels={element.labels} status={element.state}/>

          </td>
          </tr>
        );
      })}
        </tbody>
        </Table>
    </div>
  );
}

export default App;
