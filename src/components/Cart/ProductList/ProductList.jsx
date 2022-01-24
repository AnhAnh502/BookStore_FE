import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../../apis/baseApi";
import { setProductList, updateTotalPrices } from "../../../redux/actions/cart";
import Product from "../Product/Product";

export default function ProductList() {
  const bookList = useSelector((state) => state.cart.selectedProducts);
  const dispatch = useDispatch();
  const totalPrices = bookList.reduce(
    (accumulator, item) => accumulator + item.book.price * item.quantity,
    0
  );

  useEffect(() => {
    const updateTotalPricesAction = updateTotalPrices(totalPrices);
    dispatch(updateTotalPricesAction);
  });

  const getData = async () => {
    try {
      const res = await axiosInstance.get("/cart");
      if (res.status === 200) dispatch(setProductList(res.data.cart));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="m-0 p-0">
      {bookList.map((book, index) => (
        <Product key={index} book={book.book} quantity={book.quantity} />
      ))}
    </ul>
  );
}
