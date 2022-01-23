import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from '../common/Header/Header';
// import axios from '../../api/contacts';
import './detail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DATA from '../../Data';


const Detail = () => {

    const [product, setProduct] = useState({});
    const [number,setNumber] = useState(1);

    useEffect(()=>{
      const getBook = DATA.find(function (e) {
        return e.id === 0;
      })
      setProduct(getBook);
    })

    // const callBookApi = async () => {
    //     const response = await axios.get("/api/books")
    //     return response.data;
    //   };

      // useEffect(() => {
      //   const getBooks = async (id) => {
      //     const Books = await callBookApi();
      //     const book = Books[id];
      //     if(book) setProduct(book);
      // }
      // getBooks();
      // }, []);

      const handleIncrease = () => {
        setNumber(number + 1)
      };

      const handleDecrease = () => {
        setNumber(number===0? 0 : number - 1)
      }

      const postToCart = async () => {
        // let dataToCart = await axios.post("/api/cart",{
        //   name:product.name,
        //   number: number
        // })
        
      }

    return (
      <>
        <Header />
        <div class="container">
          <div class="col-lg-12 border p-3 main-section bg-white m-auto mt-5">
              <div class="row m-5">
                  <div class="col-lg-4 left-side-product-box pb-3">
                      <img src={product.img} class="border p-3" width="100%" height="100%" />
                      <p>Nhà xuất bản: {product.publisher}</p>
                      <p>Xuất bản ngày: {product.published}</p>
                  </div>
                  <div class="col-lg-8">
                      <div class="right-side-pro-detail border p-3 m-0">
                          <div class="row">
                              <div class="col-lg-12">
                                  <span className="h4">Tên sách</span>
                                  <p class="m-0 p-0 d-flex">
                                    <p className='display-4'>{product.name}</p>
                                    <h5 className='mt-4'> - {product.title}</h5>
                                  </p>
                                  <p>{product.author}</p>

                              </div>
                              <div class="col-lg-12">
                                  <p class="m-0 p-0 price-pro text-danger">{product.price} đ</p>
                                  <hr class="p-0 m-0"/>
                              </div>
                              <div class="col-lg-12 pt-2">
                                  <h5>Mô tả cuốn sách</h5>
                                  <span>{product.desc}</span>
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
