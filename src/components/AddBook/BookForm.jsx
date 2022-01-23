import React, { useState } from 'react';
import { Button, Card, Col, FloatingLabel, Form, FormControl, Row } from 'react-bootstrap';

export default function BookForm() {
    const [book, setBook] = useState({
        isbn: '',
        title: '',
        author: '',
        published: '',
        publisher: '',
        page: '',
        imageUrl: '',
        description: '',
        price: ''
    })

    const handleSubmit = (e) => {
        console.log(book);
        e.preventDefault();
    }

    return (
        <Card className='mt-4'>
            <h1 className='text-center fs-2 fw-bold mt-4'>Add New Book</h1>
            <Form 
                className='p-4'
                onSubmit={handleSubmit}    
            >
                <Row>
                    <Col md={6}>
                        <FloatingLabel
                            label="Code"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Code"
                                required
                                value={book.isbn}
                                onChange={(e) => setBook({...book, isbn: e.target.value})}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md={6}>
                        <FloatingLabel
                            label="Published"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="date" 
                                placeholder="Published" 
                                required
                                value={book.published}
                                onChange={(e) => setBook({...book, published: e.target.value})}
                            />
                        </FloatingLabel>
                    </Col>
                </Row> 
                <FloatingLabel
                    label="Title"
                    className="mb-3"
                >
                    <Form.Control 
                        type="text" 
                        placeholder="Title"
                        required
                        value={book.title}
                        onChange={(e) => setBook({...book, title: e.target.value})}
                    />
                </FloatingLabel>
                <Row>
                    <Col md={6}>
                        <FloatingLabel
                            label="Author"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Author" 
                                required
                                value={book.author}
                                onChange={(e) => setBook({...book, author: e.target.value})}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            label="Publisher"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="text" 
                                placeholder="Publisher" 
                                required
                                value={book.publiser}
                                onChange={(e) => setBook({...book, publiser: e.target.value})}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FloatingLabel
                            label="Price"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="number" 
                                placeholder="Price" 
                                required
                                value={book.price}
                                onChange={(e) => setBook({...book, price: e.target.value})}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel
                            label="Number Of Pages"
                            className="mb-3"
                        >
                            <Form.Control 
                                type="number" 
                                placeholder="Number Of Pages" 
                                required
                                value={book.page}
                                onChange={(e) => setBook({...book, page: e.target.value})}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                                
                <FloatingLabel 
                    label="Description"
                    className="mb-3"    
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        style={{ height: '100px' }}
                        required
                        value={book.description}
                        onChange={(e) => setBook({...book, description: e.target.value})}
                    />
                </FloatingLabel>
                <FormControl
                    type='file'
                    accept=".jpg,.png,.jpeg"
                    placeholder="Thumbnail"
                    className='mb-3'
                />
                <Row className="d-flex justify-content-end">
                    <Col xs={12} md={4}>
                        <Button 
                            variant="info" 
                            type="submit" 
                            className='text-white mx-0 w-100'
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Card>
    );
}
