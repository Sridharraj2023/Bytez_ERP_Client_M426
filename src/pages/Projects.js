import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form, Row, Col } from 'react-bootstrap';
import { projectAPI, clientAPI } from '../services/api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() => {
    loadProjects();
    loadClients();
  }, []);

  const loadProjects = async () => {
    const { data } = await projectAPI.getAll();
    setProjects(data);
  };

  const loadClients = async () => {
    const { data } = await clientAPI.getAll();
    setClients(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await projectAPI.update(form.id, form);
      } else {
        await projectAPI.create(form);
      }
      setShow(false);
      setForm({});
      loadProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this project?')) {
      await projectAPI.delete(id);
      loadProjects();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h2>Projects</h2>
        <Button onClick={() => { setForm({}); setShow(true); }}>Add Project</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Client</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(p => (
            <tr key={p.id}>
              <td className="text-left">{p.project_name}</td>
              <td className="text-left">{p.company_name}</td>
              <td>{p.start_date}</td>
              <td>{p.end_date}</td>
              <td>${p.budget}</td>
              <td>
                <span className={`status-indicator status-${p.status === 'Completed' ? 'completed' : p.status === 'In Progress' ? 'active' : 'pending'}`}></span>
                <span className={`badge bg-${p.status === 'Completed' ? 'success' : p.status === 'In Progress' ? 'primary' : 'secondary'}`}>
                  {p.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  <Button 
                    size="sm" 
                    variant="outline-primary" 
                    onClick={() => { setForm(p); setShow(true); }}
                  >
                    ✏️ Edit
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline-danger" 
                    onClick={() => handleDelete(p.id)}
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
          <Modal.Title>{form.id ? 'Edit' : 'Add'} Project</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control value={form.project_name || ''} onChange={e => setForm({...form, project_name: e.target.value})} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Client</Form.Label>
                  <Form.Select value={form.client_id || ''} onChange={e => setForm({...form, client_id: e.target.value})} required>
                    <option value="">Select Client</option>
                    {clients.map(c => <option key={c.id} value={c.id}>{c.company_name}</option>)}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" value={form.description || ''} onChange={e => setForm({...form, description: e.target.value})} />
            </Form.Group>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" value={form.start_date || ''} onChange={e => setForm({...form, start_date: e.target.value})} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" value={form.end_date || ''} onChange={e => setForm({...form, end_date: e.target.value})} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Budget</Form.Label>
                  <Form.Control type="number" value={form.budget || ''} onChange={e => setForm({...form, budget: e.target.value})} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select value={form.status || 'Pending'} onChange={e => setForm({...form, status: e.target.value})}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
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

export default Projects;
