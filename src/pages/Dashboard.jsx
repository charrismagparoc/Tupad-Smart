import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import StatCard from '../components/StatCard'
import RecentApplications from '../components/RecentApplications'
import { systemMetrics, topPriorityApplicants, applicationStatusData } from '../data/dashboardData'
import '../styles/Dashboard.css'

function Dashboard({ onLogout, onNavigate }) {
  return (
    <div className="dashboard-container">
      <Sidebar currentPage="dashboard" onNavigate={onNavigate} />
      <main className="dashboard-main">
        <Header onLogout={onLogout} />
        
        <section className="dashboard-content">
          <div className="content-header">
            <h2>Analytics Dashboard</h2>
            <p>Overview of TUPAD program statistics and trends</p>
          </div>

          {/* Metrics Cards */}
          <section className="metrics-grid">
            <StatCard 
              title="Total Beneficiaries" 
              value={systemMetrics.totalBeneficiaries}
              icon="👥"
              color="#4CAF50"
            />
            <StatCard 
              title="Pending Applications" 
              value={systemMetrics.pendingApplications}
              icon="📋"
              color="#FF9800"
            />
            <StatCard 
              title="Active Workers" 
              value={systemMetrics.activeWorkers}
              icon="💼"
              color="#2196F3"
            />
            <StatCard 
              title="Completion Rate" 
              value={`${systemMetrics.completionRate}%`}
              icon="✓"
              color="#9C27B0"
            />
          </section>

          {/* Charts Section */}
          <section className="charts-section">
            <article className="chart-card">
              <h3>Application Status Distribution</h3>
              <div className="chart-placeholder">
                <div className="pie-chart-simulation">
                  <div className="chart-data">
                    <div className="chart-item">
                      <span className="dot" style={{backgroundColor: '#4CAF50'}}></span>
                      <span>Approved: {applicationStatusData.approved}</span>
                    </div>
                    <div className="chart-item">
                      <span className="dot" style={{backgroundColor: '#FF9800'}}></span>
                      <span>Pending: {applicationStatusData.pending}</span>
                    </div>
                    <div className="chart-item">
                      <span className="dot" style={{backgroundColor: '#f44336'}}></span>
                      <span>Rejected: {applicationStatusData.rejected}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <article className="chart-card">
              <h3>Top Priority Applicants (ML Scores)</h3>
              <div className="priority-list">
                {topPriorityApplicants.map((applicant) => (
                  <div key={applicant.id} className="priority-item">
                    <div className="priority-header">
                      <span className="applicant-name">{applicant.name}</span>
                      <span className="ml-score">{applicant.score}</span>
                    </div>
                    <p className="priority-reason">{applicant.reason}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          {/* Recent Applications */}
          <RecentApplications />

          {/* Quick Actions */}
          <section className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-buttons">
              <button 
                className="action-btn primary"
                onClick={() => onNavigate('beneficiaries')}
              >
                <span className="btn-icon">➕</span>
                Register Beneficiary
              </button>
              <button 
                className="action-btn secondary"
                onClick={() => onNavigate('applications')}
              >
                <span className="btn-icon">📊</span>
                Review Applications
              </button>
              <button 
                className="action-btn tertiary"
                onClick={() => onNavigate('reports')}
              >
                <span className="btn-icon">📄</span>
                Create Report
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Dashboard