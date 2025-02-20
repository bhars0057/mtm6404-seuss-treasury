import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Books from './Books'
import BookDetails from './BookDetails'
import Quotes from './Quotes'

function App() {
  return (
    <Router>
      <header className="app-header">
        <h1>📖 Seussology</h1>
        <nav>
          <ul>
            <li><Link to="/">📚 Books</Link></li>
            <li><Link to="/quotes">💬 Quotes</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App