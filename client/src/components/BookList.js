import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import AddBook from './AddBook'

const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <div>Loading</div>

    const { books } = data

    return (
        <div>
            <ul>
                { books.map(book => <li key={book.id}>{book.name}</li>) }
            </ul>
            <AddBook/>
        </div>
    )
}

export default BookList
