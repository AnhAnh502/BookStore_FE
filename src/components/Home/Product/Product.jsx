import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { applyMiddleware } from "redux";
import axios from "../../../api/contacts";

const Product = () => {
    
    const getDatabooks = async () => {
        const response = await axios.get("/api/books");
        return response.data;
    }

    const [books,setBooks] = useState([]);
    
    useEffect(()=>{
        const getBooks = async () => {
            const Books = await getDatabooks();
            if(Books) setBooks(Books);
        }
        getBooks();
    },[])
    
    console.log(books);

    const addDataBook = () => {

    }


    return (
        <>
            <ul className="productList">
                {books.map((book,index) =>{
                    console.log(book.name);
                    return (
                        <li key={book.id}
                        >
                            <a href={`/products/${book.id}`}>
                                {book.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Product;