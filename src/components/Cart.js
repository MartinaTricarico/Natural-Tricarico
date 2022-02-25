import { Button, Card, Col, Container, Row } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { auth, db } from "../Firebase.js";
import { CartContext } from "../context/CartContext";
import { Delete } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const Cart = () => {
  const { items, removeItem, totalCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState({
    name: "",
    lastname: "",
    address: "",
    email: "",
    phone: "",
  });

  const checkout = () => {
    console.log(items);
    if (items.length === 0) {
      alert("no tienes items en el carrito");
      return;
    }
    const itemsToBuy = items.map((item) => {
      return {
        id: item.id,
        title: item.name,
        price: item.price,
        qty: item.qty,
      };
    });

    const user = auth.currentUser;
    if (user !== null) {
      user.providerData.forEach((profile) => {
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
      });
    }

    const buyer = {
      name: user.displayName,
      email: user.email,
    };

    const order = { buyers: buyer, items: itemsToBuy };
    addDoc(collection(db, "orders"), order)
      .then((doc) => {
        setOrderId(doc.id);
        setSuccess(true);
        console.log("el id de mi doc creado es ", doc.id);
      })
      .catch((err) => {
        console.log("algo malo paso", err);
      });
  };

  useEffect(() => {
    if (items.length > 0) {
      const totalGlobal = items.reduce((a, b) => {
        return a.qty * a.price + b.qty * b.price;
      });
      setTotal(totalGlobal);
    }
  }, [items]);

  return (
    <div>
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
                            <img
                              style={{ height: "80px" }}
                              src={item.imageUrl}
                            />
                          </Col>
                          <Col xs={4}>
                            <h4 className="product-name">
                              <strong>{item.name}</strong>
                            </h4>
                            <h4>
                              <small> Detalle: {item.detail}</small>
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
                    <Button variant="success" onClick={checkout}>
                      Terminar compra
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      {success ? (
        <div
          style={{
            marginTop: "50",
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.10)",
          }}
        >
          <h1>Tu compra se ha realizado con éxito</h1>
          <p>Puedes hacer el seguimiento con el siguiente id {orderId}</p>

          <Button as={Link} to="/">
            Seguir comprando
          </Button>
        </div>
      ) : null}
    </div>
  );
};
export default Cart;
