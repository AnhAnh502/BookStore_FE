import React from 'react';
import Header from '../components/common/Header/Header';
import Product from '../components/Home/Product/Product'
// import Carousel from 'react-bootstrap/Carousel'
// import { Carousel, Button, Container } from 'react-bootstrap';

export default function Home() {
     return (
         
        <div>
            <Header/>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://media.istockphoto.com/photos/books-picture-id949118068?b=1&k=20&m=949118068&s=170667a&w=0&h=YZ_FOpR300sPowTqW0f0NaebJx2KfQvGxbafAIsfALA=" class="d-block w-100" alt="Book" height="500px"/>
                </div>
                        <div class="carousel-item">
                            <img src="https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716__340.jpg" class="d-block w-100" alt="Book" height="500px"/>
                </div>
                            <div class="carousel-item">
                                <img src="https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581__340.jpgg" class="d-block w-100" alt="Book" height="500px"/>
                </div>
                            <div class="carousel-item">
                                <img src="https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__340.jpg" class="d-block w-100" alt="Book" height="500px"/>

                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                        <Product/>
                    </div>
                    )
}
