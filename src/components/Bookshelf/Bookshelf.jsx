import { useState } from 'react';

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])

    const [newBooks, setNewBooks] = useState({
        title: '',
        author: ''
    })


    const handleInputChange = (event) => {
        const { name, value } = event.target

        setNewBooks({ ...newBooks, [name]: value })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBooks])
        setNewBooks({ title: '', author: '' })
    }



    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="titleInput">Title:</label>
                    <input
                        id="titleInput"
                        type="text"
                        name="title"
                        value={newBooks.title}
                        onChange={handleInputChange} />

                    <label htmlFor="authorInput">Author</label>
                    <input
                        id="authorInput"
                        type="text"
                        name="author"
                        value={newBooks.author}
                        onChange={handleInputChange} />
                    <button type="submit">Add Book</button>
                </form>

            </div>
            <div className="bookCardsDiv">
                {books.map((book, index) => [
                    <div className="bookCard" key={ index }>
                        <h2>{book.title}</h2>
                        <p>by {book.author}</p>
                    </div>
                ])}
            </div>
        </div>
    )
}

export default Bookshelf