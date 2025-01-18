import React, { useState } from 'react';
import {   Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!formData.name || !formData.email || !formData.message) {
      setError(true);
      setSubmitted(false);
      return;
    }

    
    console.log('Pesan terkirim:', formData);
    setSubmitted(true);
    setError(false);

   
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Container>
      <h1 className="text-center mb-5">Hubungi Kami</h1>
      <Row>
        <Col md={4} className="mb-4">
          <div className="contact-info">
            <h4>Informasi Kontak</h4>
            <div className="d-flex align-items-center mb-3">
              <MapPin className="me-3" />
              <span>Jl. Warisan No. 23, Kota Tradisi</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Phone className="me-3" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="d-flex align-items-center">
              <Mail className="me-3" />
              <span>info@dapurwarisan.com</span>
            </div>
          </div>
        </Col>

        <Col md={8}>
          {submitted && (
            <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
              Terima kasih! Pesan Anda telah terkirim.
            </Alert>
          )}

          {error && (
            <Alert variant="danger" onClose={() => setError(false)} dismissible>
              Mohon lengkapi semua field yang wajib diisi.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama Lengkap*</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda" 
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda" 
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Nomor Telepon</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Masukkan nomor telepon (opsional)" 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Pesan*</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tulis pesan Anda" 
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Kirim Pesan
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;