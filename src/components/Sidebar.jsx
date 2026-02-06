import { useState, useEffect } from 'react'
import '../styles/Sidebar.css'

function Sidebar({ currentPage, onNavigate }) {
  const [activePage, setActivePage] = useState(currentPage || 'dashboard')

  useEffect(() => {
    if (currentPage) {
      setActivePage(currentPage)
    }
  }, [currentPage])

  const handleNavClick = (page) => {
    setActivePage(page)
    if (onNavigate) {
      onNavigate(page)
    }
  }

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard', page: 'dashboard' },
    { id: 'beneficiaries', icon: '👥', label: 'Beneficiaries', page: 'beneficiaries' },
    { id: 'applications', icon: '📝', label: 'Applications', page: 'applications' },
    { id: 'schedule', icon: '📅', label: 'Schedule', page: 'schedule' },
    { id: 'announcements', icon: '📢', label: 'Announcements', page: 'announcements' },
    { id: 'reports', icon: '📄', label: 'Reports', page: 'reports' },
    { id: 'settings', icon: '⚙️', label: 'Settings', page: 'settings' }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">TS</div>
          <div className="logo-text">
            <span className="logo-title">TUPAD Smart</span>
            <span className="logo-subtitle">Barangay Gusa</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li 
              key={item.id} 
              className={activePage === item.page ? 'nav-item active' : 'nav-item'}
            >
              <a 
                href="#" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.page)
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar