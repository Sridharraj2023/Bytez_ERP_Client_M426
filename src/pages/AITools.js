import React, { useState } from 'react';
import { Card, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { aiAPI } from '../services/api';

function AITools() {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('social_media');
  const [content, setContent] = useState('');
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateContent = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await aiAPI.generateContent({ topic, contentType });
      setContent(data.content);
    } catch (error) {
      setContent('Error: Check OpenAI API key');
    }
    setLoading(false);
  };

  const getInsights = async () => {
    setLoading(true);
    try {
      const { data } = await aiAPI.getInsights();
      setInsights(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <h2 className="mb-4">AI Tools</h2>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header className="bg-primary text-white">
              <h5>AI Content Generator</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={generateContent}>
                <Form.Group className="mb-3">
                  <Form.Label>Topic</Form.Label>
                  <Form.Control value={topic} onChange={e => setTopic(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Content Type</Form.Label>
                  <Form.Select value={contentType} onChange={e => setContentType(e.target.value)}>
                    <option value="social_media">Social Media</option>
                    <option value="blog_idea">Blog Ideas</option>
                    <option value="ad_copy">Ad Copy</option>
                  </Form.Select>
                </Form.Group>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Generating...' : 'Generate'}
                </Button>
              </Form>
              {content && <Alert variant="success" className="mt-4"><pre>{content}</pre></Alert>}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header className="bg-success text-white">
              <h5>Project Insights</h5>
            </Card.Header>
            <Card.Body>
              <Button variant="success" onClick={getInsights} disabled={loading}>
                {loading ? 'Loading...' : 'Get Insights'}
              </Button>
              {insights && (
                <Alert variant="info" className="mt-4">
                  <h6>Statistics:</h6>
                  <ul>
                    <li>Total: {insights.totalProjects}</li>
                    <li>Active: {insights.activeProjects}</li>
                    <li>Completed: {insights.completedProjects}</li>
                  </ul>
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AITools;
