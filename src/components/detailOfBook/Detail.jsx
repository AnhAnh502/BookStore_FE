import React from 'react'
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from '../../api/contacts';
import './detail.module.css';


const Detail = () => {

    const [product, setProduct] = useState({});
    const [number,setNumber] = useState(1);

    const callBookApi = async () => {
        const response = await axios.get("/api/books")
        return response.data;
      };

      useEffect(() => {
        const getBooks = async (id) => {
          const Books = await getDatabooks();
          const book = Books[id];
          if(book) setProduct(book);
      }
      getBooks();
      }, []);

      const handleIncrease = () => {
        setNumber(() =>{
          number + 1;
        })
      };

      const handleDecrease = () => {
        setNumber(() =>{
          number - 1;
        })
      }

    return (
        <Container className="productView">
          <Grid container>
            <Grid item xs={12} md={6} className="imageWrapper">
              <img src={product.img} alt={product.name}
              />
            </Grid>
            <Grid item xs={12} md={5} className="text">
              <Typography variant="h2"><b>{product.name}</b></Typography>
              <hr />
              <Typography variant="p" dangerouslySetInnerHTML={createMarkup(product.description)} />
              <Typography variant="h3" color="secondary" >Price: <b> {product.price} </b> </Typography>
              <br/>
              <Grid container spacing={4}>
                <button
                  onClick={handleDecrease}
                >-</button>
                {number}
                <button
                  onClick={handleIncrease}
                >
                  +
                </button>

                <Grid item xs={12}>
                  <Button size="large" className="custom-button" component={Link} to='/cart' >
                     ADD TO CART
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      );
    };
    
    export default Detail;
