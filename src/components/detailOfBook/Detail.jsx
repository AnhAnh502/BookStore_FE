import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from '../common/Header/Header';
// import axios from '../../api/contacts';
import './detail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Detail = () => {

    // const [product, setProduct] = useState({});
    const [number,setNumber] = useState(1);

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

    return (
      <>
        <Header />
        <div class="container">
          <div class="col-lg-12 border p-3 main-section bg-white m-auto mt-5">
              <div class="row m-5">
                  <div class="col-lg-4 left-side-product-box pb-3">
                      <img src="https://salt.tikicdn.com/cache/400x400/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg.webp" class="border p-3" width="100%" height="100%" />
                  </div>
                  <div class="col-lg-8">
                      <div class="right-side-pro-detail border p-3 m-0">
                          <div class="row">
                              <div class="col-lg-12">
                                  <span className="h4">Tên sách</span>
                                  <p class="m-0 p-0 display-4">The Book</p>
                              </div>
                              <div class="col-lg-12">
                                  <p class="m-0 p-0 price-pro text-danger">giá sách đ</p>
                                  <hr class="p-0 m-0"/>
                              </div>
                              <div class="col-lg-12 pt-2">
                                  <h5>Mô tả cuốn sách</h5>
                                  <span>Sách “Mô hình Biểu đồ – Phương pháp Hiệu quả để Tìm Kiếm Lợi nhuận” của tác giả Thomas Bulkowski
                                  do FinFin phát hành – chia sẻ kinh nghiệm THỰC CHIẾN trong 30 năm của tác giả. Chính kinh nghiệm thực
                                  chiến này giúp tác giả đạt được tự do tài chính.</span>
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
                                          <a href="#" class="btn btn-danger w-100">Thêm vào giỏ hàng</a>
                                      </div>
                                      <div class="col-lg-6">
                                          <a href="#" class="btn btn-success w-100">Mua ngay</a>
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
