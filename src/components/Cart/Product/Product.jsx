import React from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../../../redux/actions/cart";

export default function Product({ book, quantity }) {
  const dispatch = useDispatch();

  const updateProductAction = (newProduct) => {
    dispatch(updateProduct(newProduct));
  };

  const increaseQuantity = () => {
    const newProduct = {
      book: book,
      quantity: quantity + 1,
    };
    updateProductAction(newProduct);
  };

  const decreaseQuantity = () => {
    const newProduct = {
      book: book,
      quantity: quantity - 1,
    };
    updateProductAction(newProduct);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (value <= 0 || value === "") value = 1;

    const newProduct = {
      book: book,
      quantity: value,
    };
    updateProductAction(newProduct);
  };

  const handleDeleteProduct = () => {
    const deleteProductAction = deleteProduct({ book, quantity });
    dispatch(deleteProductAction);
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Card
      className="p-2 bg-white mb-2 rounded shadow-sm"
      style={{ height: "120px" }}
    >
      <Row>
        <Col xs={4} sm={3} md={2}>
          <div
            className="d-flex justify-content-center me-0"
            style={{ height: "100px" }}
          >
            <img src={book.imageUrl} alt="" className="rounded mh-100 mw-100" />
          </div>
        </Col>
        <Col xs={8} sm={9} lg={10} className="h-auto">
          <Row className="h-100">
            <Col
              xs={12}
              lg={7}
              className="d-flex flex-column justify-content-center align-items-start"
            >
              <p className="text-start text-break fs-6 fw-bold mb-2 line-clamp-1">
                {book.title}
              </p>
              <Badge bg="info" className="py-2 px-3 mb-2">
                <p className="text-start m-0">{`${numberWithCommas(
                  book.price
                )} VNĐ`}</p>
              </Badge>
            </Col>
            <Col xs={12} lg={5} className="d-flex justify-content-end">
              <InputGroup
                className="my-auto mx-2"
                style={{ maxWidth: "130px" }}
                size="sm"
              >
                <Button
                  variant="info"
                  className="text-white"
                  onClick={() => decreaseQuantity()}
                  disabled={quantity <= 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                </Button>
                <FormControl
                  type="number"
                  value={quantity}
                  onChange={(e) => handleChange(e)}
                />
                <Button
                  variant="info"
                  className="text-white"
                  onClick={() => increaseQuantity()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </Button>
              </InputGroup>
              <Button
                variant="outline-danger"
                className="ml-2 my-auto"
                size="sm"
                onClick={() => handleDeleteProduct()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
