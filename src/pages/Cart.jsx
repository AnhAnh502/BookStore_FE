import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ProductList from '../components/Cart/ProductList/ProductList';
import TotalPrice from '../components/Cart/TotalPrice/TotalPrice';
import Header from '../components/common/Header/Header'

export default function Cart() {
    return (
        <>
            <Header/>
            <Container className='pt-3 h-100'>
                <Row>
                    <Col xs={12} lg={8}>
                        <ProductList/>
                    </Col>
                    <Col xs={12} lg={4}>
                        <TotalPrice/>
                    </Col>
                </Row>
            </Container>
        </> 
    );
}
