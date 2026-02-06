import '../styles/StatCard.css'

function StatCard({ title, value, icon, color }) {
  return (
    <article className="stat-card" style={{ borderLeftColor: color }}>
      <div className="stat-content">
        <div className="stat-info">
          <h3 className="stat-title">{title}</h3>
          <p className="stat-value">{value}</p>
        </div>
        <div className="stat-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
      </div>
    </article>
  )
}

export default StatCard