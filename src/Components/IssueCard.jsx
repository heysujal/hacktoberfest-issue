import React from "react"
import Card from "react-bootstrap/Card";

// let cardStyle = {

// }

export default function IssueCard(props) {
    return (
      <Card>
        <Card.Body> <Card.Link target="_blank"  href={ props.link}>{props.title }</Card.Link> </Card.Body>
        
      </Card>
    );
}


