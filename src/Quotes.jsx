import { useState, useEffect } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch(error => console.error("Error fetching quotes:", error))
  }, [])

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
  )
}

export default Quotes