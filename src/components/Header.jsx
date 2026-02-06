import '../styles/Header.css'

function Header({ onLogout }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="page-title">Dashboard</h1>
        </div>
        <div className="header-right">
          <div className="user-info">
            <div className="user-avatar">AU</div>
            <div className="user-details">
              <span className="user-name">Admin User</span>
              <span className="user-role">TUPAD Administrator</span>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header