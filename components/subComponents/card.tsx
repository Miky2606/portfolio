import { Projects } from "../../interfaces/interface";
import { Card } from "react-bootstrap";
import Link from "next/link";

const Cards = (props: Projects) => {
  return (
    <div>
      <Link href={props.url}>
        <a target="_blank">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={props.images}
              height="200px !important"
            />
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
        </a>
      </Link>
    </div>
  );
};

export default Cards;
