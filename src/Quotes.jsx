// import { useState, useEffect } from 'react'

// function Quotes() {
//   const [quotes, setQuotes] = useState([])

//   useEffect(() => {
//     fetch('https://seussology.info/api/quotes/random/10')
//       .then((response) => response.json())
//       .then((data) => setQuotes(data))
//   }, [])

//   return (
//     <div>
//       <h1>Random Quotes</h1>
//       {/* <ul>
//         {quotes.map((quote, index) => (
//           <li key={index}>{quote}</li>
//         ))}
//       </ul> */}
//       <ul>
//         {quotes.map((quote) => (
//           <li key={quote.id}>
//             "{quote.text}" — <strong>{quote.book.title}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Quotes


import { useState, useEffect } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch(error => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <div>
      <h2>💬 Dr. Seuss Quotes</h2>
      <div className="quote-list">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <p className="quote-text">"{quote.text}"</p>
            <p className="quote-book">— {quote.book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quotes;

