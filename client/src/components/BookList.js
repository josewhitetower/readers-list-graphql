import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

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
    console.log(data)
    return (
        <div>
            <ul>
                <li>Book Name</li>
            </ul>
        </div>
    )
}

export default BookList
