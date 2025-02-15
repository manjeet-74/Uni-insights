
import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <div>
      <h1>University insights</h1>
      <Link to="/login" className='btn'>Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default App
