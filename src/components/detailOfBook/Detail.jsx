import React from 'react'
import { Link } from 'react-router-dom';
import { Grid } from "@mui/material"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import axios from '../../api/contacts';
import './detail.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Detail = () => {

    const [product, setProduct] = useState({});
    const [number,setNumber] = useState(1);

    const callBookApi = async () => {
        const response = await axios.get("/api/books")
        return response.data;
      };

      useEffect(() => {
        const getBooks = async (id) => {

          const Books = await callBookApi();
          const book = Books[id];
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

    return (
      <Grid container spacing={0} mt={5} className="d-flex justify-content-center container">
        <Grid item xs={12} md={6}>
          <img src="https://cdn.chec.io/merchants/28663/assets/3tHrxL1JReWwXWUv%7C3.jpg" alt="" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} md={5} className='content m-auto'>
          <div  className="name" mb={2} className="d-flex justify-content-center">
            The Book
          </div>
          <div className="desc d-flex justify-content-center">
            fhakhfjkgdufyuegfjhdsjfhgdjhsabcjahfgjhdgfjdahgfjdasfghafjh
          </div>
          <Stack spacing={2} direction="row" className='justify-content-center'>
            <Button variant="text" onClick={handleDecrease}>-</Button>
            <b>{number}</b>
            <Button variant="text" onClick={handleIncrease}>+</Button>
          </Stack>
          <div className="price d-flex justify-content-center">120.000 đ</div>
          <Button variant="contained" component={Link} to="/cart" className='d-flex justify-content-center buttonAdd'>
            Thêm vào giỏ hàng
          </Button>
        </Grid>
      </Grid>
      );
    };
    
    export default Detail;
