import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, totalCart } = useContext(CartContext);
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Card className="panel panel-info">
            <Card.Header>
              <Card.Title className="panel-title">
                <Row>
                  <Col xs={6}>
                    <h5>
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                      Carrito de compras
                    </h5>
                  </Col>
                  <Col xs={6}></Col>
                </Row>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              {items.length >= 1 ? (
                items.map((item, index) => {
                  return (
                    <div key={index}>
                      <Row>
                        <Col xs={2}>
                          <img style={{ height: "80px" }} src={item.imageUrl} />
                        </Col>
                        <Col xs={4}>
                          <h4 className="product-name">
                            <strong>{item.name}</strong>
                          </h4>
                          <h4>
                            <small> Detalle: {item.details}</small>
                          </h4>
                        </Col>
                        <Col xs={6}>
                          <Row>
                            <Col xs={6} className="text-right">
                              <h6>
                                <strong>${item.price} /kg</strong>
                              </h6>
                            </Col>
                            <Col xs={4}>
                              <input
                                type="text"
                                className="form-control input-sm"
                                value={item.qty}
                              />
                            </Col>
                            <Col xs={2}>
                              <Button
                                xs={2}
                                variant="primary"
                                variant="danger"
                                onClick={() => removeItem(item.id)}
                              >
                                <Delete />
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <hr />
                    </div>
                  );
                })
              ) : (
                <div className="">
                  <p>No hay items</p>
                  <Link to="/">
                    <Button>Continuar comprando</Button>
                  </Link>
                </div>
              )}
            </Card.Body>
            <Card.Footer>
              <Row className="text-center">
                <Col xs={9}>
                  <h4 className="text-right">
                    Total <strong>$ {totalCart}</strong>
                  </h4>
                </Col>
                <Col xs={3}>
                  <Button variant="success">Terminar compra</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Cart;
