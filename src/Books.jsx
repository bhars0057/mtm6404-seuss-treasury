// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// function Books() {
//   const [books, setBooks] = useState([])

//   useEffect(() => {
//     fetch('https://seussology.info/api/books')
//       .then((response) => response.json())
//       .then((data) => setBooks(data))
//   }, [])

//   return (
//     <div>
//       <h1>Books</h1>
//       <div className="book-list">
//         {books.map((book) => (
//           <Link key={book.id} to={`/book/${book.id}`}>
//             <img src={book.image} alt={book.title} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Books


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h2>📚 Explore Dr. Seuss Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <Link to={`/book/${book.id}`}>
              <img src={book.image} alt={book.title} />
            </Link>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

