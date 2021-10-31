import React from "react"
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

function labelBg(label) {
  switch (label) {
  case "good first issue":
    return "success";
  case "enhancement":
    return "info";
  case "hacktoberfest":
    return "warning";
  case "Hacktoberfest":
    return "warning";
  case "bug":
    return "danger";
  case "help wanted":
    return "secondary";
  case "hacktoberfest-accepted":
    return "danger";
  case "feature":
    return "dark";
  default:
    return "primary";
}
}

export default function IssueCard(props) {
    return (
      <Card>
        <Card.Body> 
          <Card.Link target="_blank"  href={props.link}>{props.title }</Card.Link>
          <div>
          {props.labels.map((element,index)=>{
             return(
              <Badge key={index} pill bg={labelBg(element)}>
                  {element}
              </Badge>
             );
          })}
          </div>
        </Card.Body>
      </Card>
    );
}


