
export const systemMetrics = {
  totalBeneficiaries: 0,
  pendingApplications: 0,
  activeWorkers: 0,
  completionRate: 0
}

export const recentApplications = [
  {
    id: 1,
    name: "Razelle Eve Blanch Gorra",
    dateApplied: "2025-02-03",
    status: "Pending",
    mlScore: 0
  },
  {
    id: 2,
    name: "Aldren Echavia",
    dateApplied: "2025-02-02",
    status: "Approved",
    mlScore: 0
  },
  {
    id: 3,
    name: "Charris Magparoc",
    dateApplied: "2025-02-02",
    status: "Pending",
    mlScore: 0
  },
  {
    id: 4,
    name: "Trisha Guangco",
    dateApplied: "2025-02-01",
    status: "Under Review",
    mlScore: 0
  },
  {
    id: 5,
    name: "Angela Camense",
    dateApplied: "2025-02-01",
    status: "Approved",
    mlScore: 0
  }
]

export const topPriorityApplicants = [
  {
    id: 1,
    name: "Coneybelle Baquiro",
    score: 0,
    reason: "Single parent, 3 dependents, no income"
  },
  {
    id: 2,
    name: "Lovely Dequino",
    score: 0,
    reason: "Displaced worker, medical expenses"
  },
  {
    id: 3,
    name: "Mathew Polinar",
    score: 0,
    reason: "Senior citizen, no pension"
  }
]

export const applicationStatusData = {
  approved: 0,
  pending: 0,
  rejected: 0
}

export const attendanceTrend = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 95 },
  { month: "Mar", attendance: 88 },
  { month: "Apr", attendance: 91 },
  { month: "May", attendance: 94 },
  { month: "Jun", attendance: 89 }
]

export const enrollmentByMonth = [
  { month: "Aug", count: 45 },
  { month: "Sep", count: 67 },
  { month: "Oct", count: 89 },
  { month: "Nov", count: 102 },
  { month: "Dec", count: 78 },
  { month: "Jan", count: 95 }
]

export const adminUser = {
  name: "Admin User",
  role: "TUPAD Administrator",
  barangay: "Barangay Gusa"
}