import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch(error => console.error("Error fetching book details:", error))
  }, [id])

  if (!book) {
    return <div>Loading...</div>
  }

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  )
}

export default BookDetails