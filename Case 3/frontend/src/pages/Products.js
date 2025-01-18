import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: "Kue Lapis Tradisional",
        description: "Kue lapis spesial dari resep warisan keluarga dengan bahan pilihan...",
        price: 50000,
        image: "/images/kue-lapis.jpg",
      },
      {
        id: 2,
        name: "Dodol Nusantara",
        description: "Dodol berkualitas premium dari berbagai daerah dengan proses tradisional...",
        price: 75000,
        image: "/images/dodol.jpg",
      },
    ];

    setProducts(dummyProducts);
  }, []);

  return (
    <div className="products-page">
      <h1 className="text-center mb-4">Produk Kami</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100">
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
                <Card.Text>
                  <strong>Harga: Rp {product.price.toLocaleString()}</strong>
                </Card.Text>
                <Button variant="primary" className="mt-auto">
                  Beli Sekarang
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Products;
