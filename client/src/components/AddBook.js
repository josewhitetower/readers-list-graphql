import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`

function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (loading) return <div>Loading</div>

    const { authors } = data

    const handleSubmit = e => {
        e.preventDefault()
    }
    const formular = (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Genre:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Author</label>
                <select>
                    <option>Select Author</option>
                    {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
                </select>
            </div>
            <button>Add</button>
        </form>
    )
    console.log(authors)
    return formular
}

export default AddBook