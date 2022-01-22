import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

export default function TotalPrice() {
    const totalPrices = useSelector(state => state.cart.totalPrices)

    return (
        <div>
            <Card className='shadow-sm p-3 mb-5'>
                <div className='d-flex justify-content-between'>
                    <p className='fs-5'>Total</p>
                    <p  className='fs-5 fw-bold text-danger'>{`${totalPrices} VNĐ`}</p>
                </div>
                <ButtonGroup>
                    <LinkContainer to='/'>
                        <Button variant='outline-danger' className='w-50'>Back to shopping</Button>
                    </LinkContainer>
                    <Button variant='info' className='w-50 text-white'>Buy</Button>
                </ButtonGroup>
            </Card>
        </div>
    );
}
