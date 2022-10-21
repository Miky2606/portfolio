import { Projects } from "../../interfaces/interface";
import { Card } from "react-bootstrap";
import Link from "next/link";

const Cards = (props: Projects) => {
  return (
    <div>
      {props.url! != undefined ? (
        <Link href={props.url!}>
          <a target="_blank">
            <CardView {...props} />
          </a>
        </Link>
      ) : (
        <a href={`/apk/${props.apk!}`} download>
          <CardView {...props} />
        </a>
      )}
    </div>
  );
};

const CardView = (props: Projects): JSX.Element => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.images} height="200px !important" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>

        <Card.Text>
          {" "}
          {props.lenguages.map((response) => (
            <img
              style={{ width: "1.5em" }}
              key={response}
              className="m-3"
              src={`/icons/${response}.svg`}
              alt={response}
            />
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
