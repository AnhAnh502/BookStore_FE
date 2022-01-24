import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from '../common/Header/Header';
import { axiosInstance } from '../../apis/baseApi';
import './detail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/cart';
import { useSelector } from 'react-redux';



const Detail = () => {
  // let {id} = useParams();
    // const listBooksAdded = useSelector(state => state.cart.selectedProducts);
    // console.log(listBooksAdded);
    const dispatch = useDispatch();

    const [product, setProduct] = useState({});
    const [number,setNumber] = useState(1);

    
    const callBookApi = async () => {
        const response = await axiosInstance.get("/books")
        return response.data;
      };

      useEffect(() => {
        const getBooks = async () => {
          const Books = await callBookApi();
          const book = Books.products.find((e) => {
           return  e._id === "61eab6ebaa5731d9327fa0cf"
          })
          if(book) setProduct(book);
      }
      getBooks();
      }, []);

      const handleIncrease = () => {
        setNumber(number + 1)
      };

      const handleDecrease = () => {
        setNumber(number===0? 0 : number - 1)
      }

      const postToCart = () => {
        const newBookAdded = {
          book : product,
          quantity: number
      }
        const action = addProduct(newBookAdded);
        dispatch(action);
        console.log(action);
      }

    return (
      <>
        <Header />
        <div className="container">
          <div className="col-lg-12 border p-3 main-section bg-white mt-5">
              <div className="row m-5">
                  <div className="col-lg-4 left-side-product-box pb-3">
                      <img src={product.imageUrl} className="border p-3" alt='' width="100%" height="100%" />
                      <div className="">
                        <div className='sm h6'>Nhà xuất bản: {product.publisher}</div>
                        <div className='sm h6'>Xuất bản ngày: {product.published}</div>
                      </div>
                  </div>
                  <div className="col-lg-8 mt-5">
                      <div className="right-side-pro-detail p-2 pt-4">
                          <div className="row">
                              <div className="col-lg-12">
                                  <span className="h4">Cuốn sách</span>
                                  <h6 className="m-0 h6-0 ">
                                    <div className='display-4'>{product.title}</div>
                                  </h6>
                                  <h6>{product.author}</h6>

                              </div>
                              <div className="col-lg-12">
                                  <h6 className="m-0 p-0 price-pro text-danger">{product.price} đ</h6>
                                  <hr className="p-0 m-0"/>
                              </div>
                              <div className="col-lg-12 pt-2">
                                  <h5>Mô tả cuốn sách</h5>
                                  <span>{product.description}</span>
                                  <hr className="m-0 pt-2 mt-2"/>
                              </div>
                              <div className="col-lg-12">
                                  <h6>Số lượng muốn mua :</h6>
                                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" className="btn btn-outline" onClick={handleDecrease}>-</button>
                                    <button type="button" className="btn btn-outline">{number}</button>
                                    <button type="button" className="btn btn-outline" onClick={handleIncrease}>+</button>
                                  </div>
                              </div>
                              <div className="col-lg-12 mt-3">
                                  <div className="row">
                                      <div className="col-lg-6 pb-2">
                                          <Link to="/cart" onClick={postToCart} className="btn btn-danger w-100">Thêm vào giỏ hàng</Link>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
        </div>
      </>
      );
    };
    
    export default Detail;
