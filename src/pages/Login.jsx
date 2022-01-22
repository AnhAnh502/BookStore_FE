import React, { useState } from 'react';
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Particle from '../components/common/Particle';

export default function Login() {
    const [account, setAccount] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        console.log(account);
        e.preventDefault();
    }

    return (
        <Container 
            fluid
            style={{
                height: '100vh',
                backgroundColor: '#0093E9',
                backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
                zIndex: '10'
            }} 
        >
            <Row className='d-flex align-items-center justify-content-center' style={{height: '100vh', zIndex: '10'}} >
                <Col xs={12} sm={8} lg={5} >
                    <Card className='p-5 rounded-3 shadow-md'>
                        <h1 className='text-center fw-bold text-info mt-2 mb-5'>Login</h1>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    required
                                    value={account.email}
                                    onChange={(e) => setAccount({...account, email: e.target.value})}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    required
                                    value={account.password}
                                    onChange={(e) => setAccount({...account, password: e.target.value})}/>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 d-flex justify-content-end">
                                <Col xs={12} md={4}>
                                    <Button variant="info" type="submit" className='text-white mx-0 mt-2 w-100   '>
                                        Login
                                    </Button>
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex justify-content-end">
                                <Form.Label>Don't have account?</Form.Label>
                                <LinkContainer to='/signup'>
                                    <Form.Label className='fs-6 fw-bold text-info ms-2'>Sign Up</Form.Label>
                                </LinkContainer>
                            </Form.Group>
                        </Form>
                    </Card>
                </Col>
            </Row>
            <Particle/>
        </Container>
    );
}