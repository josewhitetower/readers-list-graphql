import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import AddBook from './AddBook'
import BookDetails from './BookDetails.js'
import { getBooksQuery } from '../queries/queries'

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery)
  const [id, setId] = useState(null)
  if (loading) return <div>Loading</div>

  const { books } = data

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => setId(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      {id && <BookDetails id={id} />}
      <AddBook />
    </div>
  )
}

export default BookList
