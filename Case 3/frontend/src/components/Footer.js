import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faInstagram, 
  faFacebook, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Kontak Kami</h5>
            <p>
              Email: info@dapurwarisan.com<br />
              Telepon: +62 812-3456-7890<br />
              Alamat: Jl. Warisan No. 23, Kota Tradisi
            </p>
          </Col>
          <Col md={4}>
            <h5>Tautan Cepat</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Beranda</Link></li>
              <li><Link to="/products" className="text-white text-decoration-none">Produk</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">Tentang Kami</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Hubungi Kami</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Ikuti Kami</h5>
            <div className="social-icons d-flex">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="me-3 text-white"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="me-3 text-white"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p>&copy; 2024 Dapur Warisan. Hak Cipta Dilindungi.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;