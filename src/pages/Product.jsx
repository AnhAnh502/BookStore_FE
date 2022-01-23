import React from 'react'
import { NavLink } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { Container} from 'react-bootstrap';
import DATA from '../Data'
import '../index.css'
const Product = () => {

    const cardItem = (item) => {
        return (
            <Container class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">{item.price} VNĐ</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-primary">Chi Tiết</NavLink>
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
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </Container>
                )
}

                export default Product
