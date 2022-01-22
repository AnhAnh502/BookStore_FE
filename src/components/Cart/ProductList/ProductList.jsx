import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTotalPrices } from '../../../redux/actions/cart';
import Product from '../Product/Product';

export default function ProductList() {
    const bookList = useSelector(state => state.cart.selectedProducts)
    const dispatch = useDispatch()
    const totalPrices = bookList.reduce((accumulator, item) => accumulator + item.price * item.quantities, 0)
    
    useEffect(() => {
        const updateTotalPricesAction = updateTotalPrices(totalPrices)
        dispatch(updateTotalPricesAction)
    })
    
    return (
        <ul className='m-0 p-0'>
            {
                bookList.map(((book, index) => (
                    <Product key={index} book={book}/>
                )))
            }
        </ul>
    );
}
