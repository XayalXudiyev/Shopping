/** @format */

import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../../components/StoreItem";
import StoreData from "../../data/items.json";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} lg={4} xs={1} className="g-3">
        {StoreData.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
