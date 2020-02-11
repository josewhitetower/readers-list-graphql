import { gql } from 'apollo-boost'
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`

const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      name
      id
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`

export { getAuthorsQuery, getBooksQuery, getBookQuery }
