import React from "react"
import Card from "react-bootstrap/Card";

// let cardStyle = {

// }

export default function IssueCard(props) {
    return (
      <Card>
        <Card.Body>
          <Card.Link target="_blank"  href={ props.link}>{props.title }</Card.Link>
          <Card.Text style={{margin: '0.25rem 0'}}> {props.status.charAt(0).toUpperCase() + props.status.slice(1)} </Card.Text>
        </Card.Body>
      </Card>
    );
}


