import React, { useState, useEffect } from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { dashboardAPI, projectAPI, taskAPI, userAPI } from '../services/api';

function Dashboard() {
  const [stats, setStats] = useState({});
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [statsRes, projectsRes, tasksRes, usersRes] = await Promise.all([
        dashboardAPI.getStats(),
        projectAPI.getAll(),
        taskAPI.getAll(),
        userAPI.getAll()
      ]);
      setStats(statsRes.data);
      setProjects(projectsRes.data.slice(0, 5));
      setTasks(tasksRes.data.slice(0, 5));
      setEmployees(usersRes.data.filter(u => u.role === 'Employee'));
    } catch (error) {
      console.error('Error loading dashboard:', error);
    }
  };

  const getProjectProgress = () => {
    const total = (stats.projects?.pending || 0) + (stats.projects?.in_progress || 0) + (stats.projects?.completed || 0);
    return total > 0 ? ((stats.projects?.completed || 0) / total * 100).toFixed(1) : 0;
  };

  const getTaskProgress = () => {
    const total = (stats.tasks?.to_do || 0) + (stats.tasks?.in_progress || 0) + (stats.tasks?.completed || 0);
    return total > 0 ? ((stats.tasks?.completed || 0) / total * 100).toFixed(1) : 0;
  };

  const getEmployeePerformance = () => {
    return employees.map(emp => {
      const empTasks = tasks.filter(t => t.assigned_to === emp.id);
      const completed = empTasks.filter(t => t.status === 'Completed').length;
      const total = empTasks.length;
      return {
        ...emp,
        tasksCompleted: completed,
        totalTasks: total,
        performance: total > 0 ? (completed / total * 100).toFixed(1) : 0
      };
    }).slice(0, 5);
  };

  return (
    <>
      <h2 className="mb-4">Dashboard Analytics</h2>
      
      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card bg="primary" text="white">
            <Card.Body>
              <h5>Total Clients</h5>
              <h2>{stats.totalClients || 0}</h2>
              <small>Active business clients</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white">
            <Card.Body>
              <h5>Active Projects</h5>
              <h2>{stats.projects?.in_progress || 0}</h2>
              <small>Currently in progress</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white">
            <Card.Body>
              <h5>Completed Tasks</h5>
              <h2>{stats.tasks?.completed || 0}</h2>
              <small>Successfully finished</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="info" text="white">
            <Card.Body>
              <h5>Total Employees</h5>
              <h2>{stats.totalEmployees || 0}</h2>
              <small>Active team members</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Progress Charts */}
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Header><h5>Project Progress</h5></Card.Header>
            <Card.Body>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>Overall Completion</span>
                  <span>{getProjectProgress()}%</span>
                </div>
                <ProgressBar variant="success" now={getProjectProgress()} />
              </div>
              <Row className="text-center">
                <Col><strong>{stats.projects?.pending || 0}</strong><br/><small>Pending</small></Col>
                <Col><strong>{stats.projects?.in_progress || 0}</strong><br/><small>In Progress</small></Col>
                <Col><strong>{stats.projects?.completed || 0}</strong><br/><small>Completed</small></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header><h5>Task Statistics</h5></Card.Header>
            <Card.Body>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>Task Completion Rate</span>
                  <span>{getTaskProgress()}%</span>
                </div>
                <ProgressBar variant="info" now={getTaskProgress()} />
              </div>
              <Row className="text-center">
                <Col><strong>{stats.tasks?.to_do || 0}</strong><br/><small>To Do</small></Col>
                <Col><strong>{stats.tasks?.in_progress || 0}</strong><br/><small>In Progress</small></Col>
                <Col><strong>{stats.tasks?.completed || 0}</strong><br/><small>Completed</small></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Employee Performance & Recent Data */}
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header><h5>Employee Performance</h5></Card.Header>
            <Card.Body>
              {getEmployeePerformance().map(emp => (
                <div key={emp.id} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span><strong>{emp.name}</strong></span>
                    <span>{emp.performance}% ({emp.tasksCompleted}/{emp.totalTasks})</span>
                  </div>
                  <ProgressBar 
                    variant={emp.performance >= 80 ? 'success' : emp.performance >= 60 ? 'warning' : 'danger'} 
                    now={emp.performance} 
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header><h5>Recent Projects</h5></Card.Header>
            <Card.Body>
              {projects.map(p => (
                <div key={p.id} className="mb-2 p-2 border-bottom">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>{p.project_name}</strong>
                      <br/><small className="text-muted">{p.company_name}</small>
                    </div>
                    <span className={`badge bg-${
                      p.status === 'Completed' ? 'success' : 
                      p.status === 'In Progress' ? 'primary' : 'secondary'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
