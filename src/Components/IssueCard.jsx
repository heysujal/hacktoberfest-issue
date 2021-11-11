import React from "react";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

const cardStyle = {
  backgroundColor: "#373940",
};

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
      <Card style={cardStyle}>
        <Card.Body> 
           <Card.Link
          target="_blank"
          href={props.link}
          style={{ color: "#12e4e6" }}>
            {props.title }</Card.Link>
           <Card.Text style={{ margin: "0.25rem 0", color: "#27ec27" }}>
          {" "}
          {props.status.charAt(0).toUpperCase() + props.status.slice(1)}{" "}
           </Card.Text>
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
