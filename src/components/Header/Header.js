import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

import {
  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
import Bought from './Bought';

export default class Header extends Component {
  render() {
    return (
        <Router>
         <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>                        
                        <Nav.Link as={Link} to={"/cart"}>Giỏ hàng</Nav.Link>
                        <Nav.Link as={Link} to={"/bought"}>Đã Mua</Nav.Link>                                                           
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/cart">
                    <Cart/>
                </Route>
                <Route path="/bought">
                    <Bought/>
                </Route>
                </Switch>
            </div>
            </Router>
            );
  } 
}
