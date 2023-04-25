/** @format */

import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utils/Currency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  let quantity: number = 0;

  return (
    <Card className="p">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>

      {quantity <= 0 ? (
        <Button className="w-75 m-auto mb-3">+ADD TO CARD</Button>
      ) : (
        <div className="d-flex flex-column m-auto w-100">
          <div className="d-flex justify-content-between w-75 m-auto ">
            <Button>-</Button>
            <div className="d-flex align-items-center">{quantity} in card</div>
            <Button>+</Button>
          </div>
          <Button className="bg-danger m-auto my-3 w-75">Remove</Button>
        </div>
      )}
    </Card>
  );
}
