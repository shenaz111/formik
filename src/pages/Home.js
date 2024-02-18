import React from 'react';
import Table from 'react-bootstrap/Table';
import { BiSolidPencil } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { TiPlus } from "react-icons/ti";
import { useBooks } from '../context/books.context';
import 'bootstrap/dist/css/bootstrap.min.css';  
import 'bootstrap/dist/js/bootstrap'


export default function Home() {

    const {books,handleDelete} = useBooks();

    return (
        <div>
            <h1 className='text-center mt-3'>📚LIBRARY MANAGEMENT📚</h1>
            <Link to='/add'><Button className='button mt-5' size='sm' variant="primary"><TiPlus /> Add New</Button>{' '}</Link>
            <Table className='mt-2' striped bordered hover>
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>ISBN NUMBER</th>
                        <th>PUBLISH DATE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((item,i) => <BookList key={i} data={item} handleDelete={handleDelete} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}

function BookList({ data, handleDelete }) {
    return (
        <>
            <tr>
                <td>{data.title}</td>
                <td>{data.author}</td>
                <td>{data.isbn}</td>
                <td>{data.date}</td>
                <td>
                    <Link to={`/Edit/${data.title}`}><BiSolidPencil className='ms-3' /></Link>
                    <FaTrash onClick={() => handleDelete(data)} className='ms-3' />
                </td>
            </tr>
        </>
    )
}