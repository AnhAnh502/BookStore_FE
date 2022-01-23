import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductForm from "../components/AddProduct/ProductForm";
import Header from "../components/common/Header/Header";

export default function AddProduct() {
  // const user = useSelector((state) => state.user.name);

  return (
    <>
      <Header />
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <ProductForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}
