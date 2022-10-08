import { images, Projects } from "../../interfaces/interface";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

export const Cards = (props: Projects) => {
  return (
    <div>
      <Link href={props.url}>
        <a target="_blank">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.images} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>

              <Card.Text>
                {" "}
                {props.lenguages.map((response) => (
                  <img
                    key={response}
                    className="m-3"
                    style={{ width: "1.6em" }}
                    src={`/icons/${response}.svg`}
                    alt={response}
                  />
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </div>
  );
};
