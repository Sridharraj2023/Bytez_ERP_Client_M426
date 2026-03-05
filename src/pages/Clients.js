import React, { useState, useEffect } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { clientAPI } from '../services/api';

function Clients() {
  const [clients, setClients] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isAdmin = user.role === 'Admin';

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const { data } = await clientAPI.getAll();
    setClients(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await clientAPI.update(form.id, form);
      } else {
        await clientAPI.create(form);
      }
      setShow(false);
      setForm({});
      loadClients();
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this client?')) {
      await clientAPI.delete(id);
      loadClients();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h2>Clients</h2>
        {isAdmin && (
          <Button onClick={() => { setForm({}); setShow(true); }}>Add Client</Button>
        )}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>Industry</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Projects</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(c => (
            <tr key={c.id}>
              <td className="text-left">{c.company_name}</td>
              <td>{c.industry}</td>
              <td>{c.contact_name}</td>
              <td className="text-left">{c.email}</td>
              <td>{c.project_count}</td>
              <td>
                <span className="status-indicator status-active"></span>
                <span className={`badge bg-${c.status === 'Active' ? 'success' : 'secondary'}`}>
                  {c.status}
                </span>
              </td>
              <td>
                <div className="action-buttons">
                  {isAdmin && (
                    <>
                      <Button 
                        size="sm" 
                        variant="outline-primary" 
                        onClick={() => { setForm(c); setShow(true); }}
                      >
                        ✏️ Edit
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline-danger" 
                        onClick={() => handleDelete(c.id)}
                      >
                        🗑️ Delete
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{form.id ? 'Edit' : 'Add'} Client</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control value={form.company_name || ''} onChange={e => setForm({...form, company_name: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Industry</Form.Label>
              <Form.Control value={form.industry || ''} onChange={e => setForm({...form, industry: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control value={form.contact_name || ''} onChange={e => setForm({...form, contact_name: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={form.email || ''} onChange={e => setForm({...form, email: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control value={form.phone || ''} onChange={e => setForm({...form, phone: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" value={form.address || ''} onChange={e => setForm({...form, address: e.target.value})} />
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

export default Clients;
