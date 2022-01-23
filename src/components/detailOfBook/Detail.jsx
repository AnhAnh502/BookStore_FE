import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from '../common/Header/Header';
import axios from '../../api/contacts';
import './detail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";



const Detail = () => {
  // let {id} = useParams();

    const [product, setProduct] = useState({});
    const [number,setNumber] = useState(1);

    
    const callBookApi = async () => {
        const response = await axios.get("/api/v1/books")
        return response.data;
      };

      useEffect(() => {
        const getBooks = async () => {
          const Books = await callBookApi();
          console.log(Books);
          const book = Books.products.find((e) => {
           return  e._id === "61eab6ebaa5731d9327fa0cf"
          })
          console.log(book)
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

      const postToCart = async () => {
        await axios.post("/api/v1/order",{
          bookId: product._id,
          quantity: number
        })
        
      }

    return (
      <>
        <Header />
        <div class="container">
          <div class="col-lg-12 border p-3 main-section bg-white mt-5">
              <div class="row m-5">
                  <div class="col-lg-4 left-side-product-box pb-3">
                      <img src={product.imageUrl} class="border p-3" width="100%" height="100%" />
                      <div className="">
                        <div className='sm h6'>Nhà xuất bản: {product.publisher}</div>
                        <div className='sm h6'>Xuất bản ngày: {product.published}</div>
                      </div>
                  </div>
                  <div class="col-lg-8 mt-5">
                      <div class="right-side-pro-detail p-2 pt-4">
                          <div class="row">
                              <div class="col-lg-12">
                                  <span className="h4">Tên sách</span>
                                  <p class="m-0 p-0 ">
                                    <p className='display-4'>{product.title}</p>
                                  </p>
                                  <p>{product.author}</p>

                              </div>
                              <div class="col-lg-12">
                                  <p class="m-0 p-0 price-pro text-danger">{product.price} đ</p>
                                  <hr class="p-0 m-0"/>
                              </div>
                              <div class="col-lg-12 pt-2">
                                  <h5>Mô tả cuốn sách</h5>
                                  <span>{product.description}</span>
                                  <hr class="m-0 pt-2 mt-2"/>
                              </div>
                              <div class="col-lg-12">
                                  <h6>Số lượng muốn mua :</h6>
                                  <div class="btn-group" role="group" aria-label="Basic outlined example">
                                    <button type="button" class="btn btn-outline" onClick={handleDecrease}>-</button>
                                    <button type="button" class="btn btn-outline">{number}</button>
                                    <button type="button" class="btn btn-outline" onClick={handleIncrease}>+</button>
                                  </div>
                              </div>
                              <div class="col-lg-12 mt-3">
                                  <div class="row">
                                      <div class="col-lg-6 pb-2">
                                          <Link to="/cart" onClick={postToCart} class="btn btn-danger w-100">Thêm vào giỏ hàng</Link>
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
