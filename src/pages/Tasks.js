import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Row, Col } from 'react-bootstrap';
import { taskAPI, projectAPI, userAPI } from '../services/api';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    loadTasks();
    loadProjects();
    loadUsers();
  }, []);

  const loadTasks = async () => {
    const { data } = await taskAPI.getAll();
    setTasks(data);
  };

  const loadProjects = async () => {
    const { data } = await projectAPI.getAll();
    setProjects(data);
  };

  const loadUsers = async () => {
    const { data } = await userAPI.getAll();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.id) {
      await taskAPI.update(form.id, form);
    } else {
      await taskAPI.create(form);
    }
    setShow(false);
    setForm({});
    loadTasks();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete?')) {
      await taskAPI.delete(id);
      loadTasks();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h2>Tasks</h2>
        <Button onClick={() => { setForm({}); setShow(true); }}>Add Task</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Project</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <tr key={t.id}>
              <td className="text-left">{t.title}</td>
              <td className="text-left">{t.project_name}</td>
              <td>{t.assigned_to_name || 'Unassigned'}</td>
              <td>
                <span className={`status-indicator status-${t.priority === 'High' ? 'inactive' : t.priority === 'Medium' ? 'pending' : 'active'}`}></span>
                <span className={`badge bg-${t.priority === 'High' ? 'danger' : t.priority === 'Medium' ? 'warning' : 'success'}`}>
                  {t.priority}
                </span>
              </td>
              <td>
                <span className={`status-indicator status-${t.status === 'Completed' ? 'completed' : t.status === 'In Progress' ? 'active' : 'pending'}`}></span>
                <span className={`badge bg-${t.status === 'Completed' ? 'success' : t.status === 'In Progress' ? 'primary' : 'secondary'}`}>
                  {t.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <Button 
                    size="sm" 
                    variant="outline-primary" 
                    onClick={() => { setForm(t); setShow(true); }}
                  >
                    ✏️ Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline-danger" 
                    onClick={() => handleDelete(t.id)}
                  >
                    🗑️ Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{form.id ? 'Edit' : 'Add'} Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control value={form.title || ''} onChange={e => setForm({...form, title: e.target.value})} required />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project</Form.Label>
                  <Form.Select value={form.project_id || ''} onChange={e => setForm({...form, project_id: e.target.value})} required>
                    <option value="">Select Project</option>
                    {projects.map(p => <option key={p.id} value={p.id}>{p.project_name}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Assign To</Form.Label>
                  <Form.Select value={form.assigned_to || ''} onChange={e => setForm({...form, assigned_to: e.target.value})}>
                    <option value="">Select User</option>
                    {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select value={form.priority || 'Medium'} onChange={e => setForm({...form, priority: e.target.value})}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select value={form.status || 'To Do'} onChange={e => setForm({...form, status: e.target.value})}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="date" value={form.due_date || ''} onChange={e => setForm({...form, due_date: e.target.value})} />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            <Button variant="primary" type="submit">Save</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Tasks;
