import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const featuredProducts = [
    {
      name: "Kue Lapis Tradisional",
      description: "Kue lapis spesial dari resep warisan keluarga dengan bahan pilihan...",
      image: "/images/kue-lapis.jpg",
    },
    {
      name: "Dodol Nusantara",
      description: "Dodol berkualitas premium dari berbagai daerah dengan proses tradisional...",
      image: "/images/dodol.jpg",
    },
  ];

  return (
    <div className="home-page">
      <div
        className="hero-section text-center text-white p-5 rounded mb-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://trexperienceperu.com/sites/default/files/2024-06/peruvian%20food.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-4 mb-3">Dapur Warisan</h1>
        <p className="lead mb-4">Melestarikan Cita Rasa Tradisional Indonesia</p>
        <Link to="/products">
          {" "}
          <Button variant="light" size="lg">
            Jelajahi Produk
          </Button>
        </Link>
      </div>

      <Row className="featured-products">
        <h2 className="text-center mb-4">Produk Unggulan</h2>
        {featuredProducts.map((product, index) => (
          <Col key={index} md={6}>
            <Card className="mb-4 h-100">
              <Card.Img variant="top" src={product.image} style={{ objectFit: "cover", height: "250px" }} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text
                  className="flex-grow-1"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {product.description}
                </Card.Text>
                <Button variant="outline-primary" className="mt-auto">
                  Lihat Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
