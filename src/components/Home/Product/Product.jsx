import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { Container} from 'react-bootstrap';
// import DATA from '../Data'
import { axiosInstance } from '../../../apis/baseApi';
// import '../../../'



const Product = () => {
    const [productlist,setProductList] = useState([]);
    const callBookApi = async () => {
        const response = await axiosInstance.get("/books")
        console.log(response.data)
        return response.data;
      };
    
      useEffect(() => {
        const getProducts = async () => {
          const Books = await callBookApi();
          if(Books) setProductList(Books.products);
          console.log(productlist);
      }
      getProducts();
      }, []);
    
    const cardItem = (item) => {
        return (
            <Container className="card my-5 py-4" key={item._id} style={{width: "18rem"}}>
                <img src={item.imageUrl} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="lead">{item.price} VNĐ</p>
                        <NavLink to={`/products/${item._id}`} className="btn btn-primary">Chi Tiết</NavLink>
                    </div>
            </Container>
                );
    }
                return (
                <Container>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Danh sách sản phẩm</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {productlist.map(cardItem)}
                        </div>
                    </div>
                </Container>
                )
}

                export default Product

>>>>>>> Stashed changes
