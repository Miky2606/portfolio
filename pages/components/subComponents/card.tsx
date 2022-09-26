import { images, Projects } from "../../interfaces/interface";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

export const Cards = (props: Projects) => {
  return (
    <>
      <Link href="">
        <a>
          <Card style={{ width: "18rem" }} className="cards">
            <Card.Img variant="top" src={images} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </>
  );
};
