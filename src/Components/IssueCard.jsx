import React from "react";
import Card from "react-bootstrap/Card";

const cardStyle = {
  backgroundColor: "#373940",
};

export default function IssueCard(props) {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <Card.Link
          target="_blank"
          href={props.link}
          style={{ color: "#12e4e6" }}
        >
          {props.title}
        </Card.Link>
        <Card.Text style={{ margin: "0.25rem 0", color: "#27ec27" }}>
          {" "}
          {props.status.charAt(0).toUpperCase() + props.status.slice(1)}{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
