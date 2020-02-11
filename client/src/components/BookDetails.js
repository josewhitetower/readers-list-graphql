import React, { useEffect } from 'react'
import { getBookQuery } from '../queries/queries'
import { useQuery } from '@apollo/react-hooks'

export default function BookDetails({ id }) {
  const { data, loading } = useQuery(getBookQuery, {
    variables: { id }
  })

  if (loading) return <div>Loading</div>
  const { book } = data

  const details = book && (
    <div>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author:</p>
      <ul>
        {book.author.books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div>
      <p>Book Details</p>
      {details}
    </div>
  )
}
