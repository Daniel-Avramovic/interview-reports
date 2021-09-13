import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { filterUser } from "../../../../Data/flteredUsers";
import SearchBar from "../../../components/searchBar/SearchBar";
import "./candidate.css";

const CandidatesUI = ({ candidates, value, search }) => {
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  const filteredCandidates = filterUser(candidates, value);
  if (filteredCandidates.length === 0) {
    return (
      <main>
        <SearchBar value={value} search={search} />
        <h1>No results</h1>
      </main>
    );
  }
  return (
    <main>
      <Container>
        <SearchBar value={value} search={search} />
        <Row className="text-center">
          {filteredCandidates.map((candidate, index) => {
            return (
              <Col
                xs={12}
                md={6}
                xl={4}
                className="d-flex justify-content-center mb-4"
                key={index}
              >
                <Link to={`/candidateReport/${candidate.id}`}>
                  <Card
                    style={{ width: "20rem" }}
                    border="primary"
                    bg="secondary"
                    text="white"
                  >
                    <Image
                      src={img}
                      alt="no img!!!"
                      roundedCircle
                      className="p-5"
                    />

                    <Card.Body>
                      <Card.Title className="mb-3">{candidate.name}</Card.Title>
                      <Card.Text>{candidate.email}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default CandidatesUI;
