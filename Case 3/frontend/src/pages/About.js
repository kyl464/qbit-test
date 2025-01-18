import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

function About() {
  const teamMembers = [
    {
      name: "Sri Handayani",
      role: "Founder & Head Chef",
      bio: "Ahli kuliner tradisional dengan pengalaman 15 tahun",
      image: "/images/founder.png",
    },
    {
      name: "Budi Setiawan",
      role: "Kepala Produksi",
      bio: "Penjaga kualitas dan keberlangsungan produk",
      image: "/images/production-head.png",
    },
  ];

  return (
    <div className="about-page">
      <Container>
        <h1 className="text-center my-4">Tentang Dapur Warisan</h1>

        <section className="company-story mb-5">
          <h2>Kisah Kami</h2>
          <p>Dapur Warisan berdiri pada tahun 2022 dengan misi memperkenalkan kembali kelezatan kuliner tradisional Indonesia kepada generasi muda. Kami percaya setiap hidangan memiliki cerita dan warisan budaya yang patut dilestarikan.</p>
        </section>

        <section className="our-team">
          <h2 className="text-center mb-4">Tim Kami</h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col key={index} md={6}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={member.image} className="team-image" />
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className="our-values">
          <h2>Nilai-Nilai Kami</h2>
          <ul>
            <li>Kualitas Premium</li>
            <li>Pelestarian Warisan Kuliner</li>
            <li>Dukungan Ekonomi Lokal</li>
            <li>Keberlanjutan dan Keaslian</li>
          </ul>
        </section>
      </Container>
    </div>
  );
}

export default About;
