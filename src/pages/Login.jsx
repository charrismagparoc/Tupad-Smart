import { useState } from 'react'
import '../styles/Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation - in real app, this would call an API
    if (username && password) {
      onLogin()
    } else {
      alert('Please enter both username and password')
    }
  }

  return (
    <main className="login-container">
      <section className="login-card">
        <header className="login-header">
          <div className="logo-container">
            <div className="logo-icon">TS</div>
            <h1>TUPAD Smart</h1>
          </div>
          <p className="tagline">Criteria-Based Selection & Monitoring System</p>
          <p className="location">Barangay Gusa, Cagayan de Oro City</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <footer className="login-footer">
          <p>© 2026 TUPAD Smart System. </p>
        </footer>
      </section>
    </main>
  )
}

export default Login