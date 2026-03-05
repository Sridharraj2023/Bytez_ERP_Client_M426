import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Nav, Container, Row, Col } from 'react-bootstrap';

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊', roles: ['Admin', 'Manager', 'Employee'] },
    { path: '/clients', label: 'Clients', icon: '👥', roles: ['Admin'] },
    { path: '/projects', label: 'Projects', icon: '📁', roles: ['Admin', 'Manager'] },
    { path: '/tasks', label: 'Tasks', icon: '✓', roles: ['Admin', 'Manager', 'Employee'] },
    { path: '/ai-tools', label: 'AI Tools', icon: '🤖', roles: ['Admin', 'Manager', 'Employee'] }
  ];

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(user.role)
  );

  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        {sidebarOpen && (
          <Col md={2} className="sidebar">
            <div className="p-3">
              <h4 className="text-white mb-4">Digital Agency ERP</h4>
              <Nav className="flex-column">
                {filteredNavItems.map(item => (
                  <Nav.Link
                    key={item.path}
                    as={Link}
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    <span className="me-2">{item.icon}</span>
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="mt-auto pt-4">
                <div className="text-white-50 small mb-2">{user.name}</div>
                <div className="text-white-50 small mb-3">{user.role}</div>
                <button className="btn btn-outline-light btn-sm w-100" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </Col>
        )}
        <Col md={sidebarOpen ? 10 : 12} className="main-content">
          <div className="p-3">
            <button 
              className="btn btn-outline-secondary btn-sm mb-3" 
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? '☰ Hide Sidebar' : '☰ Show Sidebar'}
            </button>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
