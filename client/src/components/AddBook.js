import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { getAuthorsQuery} from '../queries/queries'

function AddBook() {

    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [author, setAuthor] = useState('')

    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (loading) return <div>Loading</div>

    const { authors } = data

    const handleSubmit = e => {
        e.preventDefault()
        console.log({name,genre, author})
    }
    const formular = (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Book Name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div>
                <label>Author</label>
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option>Select Author</option>
                    {authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>)}
                </select>
            </div>
            <button>Add</button>
        </form>
    )
    return formular
}

export default AddBook