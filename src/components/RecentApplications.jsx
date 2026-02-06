import { recentApplications } from '../data/dashboardData'

function RecentApplications() {
  const getStatusClass = (status) => {
    switch(status) {
      case 'Approved': return 'status-approved'
      case 'Pending': return 'status-pending'
      case 'Under Review': return 'status-review'
      default: return 'status-default'
    }
  }

  return (
    <section className="recent-applications">
      <h3>Recent Applications</h3>
      <table className="applications-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date Applied</th>
            <th>Status</th>
            <th>ML Score</th>
          </tr>
        </thead>
        <tbody>
          {recentApplications.map((application) => (
            <tr key={application.id}>
              <td className="name-cell">{application.name}</td>
              <td>{application.dateApplied}</td>
              <td>
                <span className={`status-badge ${getStatusClass(application.status)}`}>
                  {application.status}
                </span>
              </td>
              <td className="score-cell">{application.mlScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default RecentApplications