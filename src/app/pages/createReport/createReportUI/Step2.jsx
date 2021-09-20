import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import './steps.css';

const Step2 = ({ handleOnChange, nextStep, backStep, companies }) => {
  console.log(companies);
  return (
    // <h1> <input onChange={ (e) => handleOnChange('company', e.target.value)} value={value} /></h1>
    <main>
      <Container className="mt-3">
        <Row>
          <Col lg={3}>
            <div className="mb-4">
              <span>1</span>Select Candidate
            </div>
            <div className="mb-4 currentStep">
              <span>2</span>Select Company
            </div>
            <div className="mb-4">
              <span>3</span>Fill Report Detail
            </div>
          </Col>
          <Col lg={9}>
            {companies.map((company, index) => {
              return (
                <div
                  key={index}
                  className="listCompany"
                  onClick={() => handleOnChange("company", company)}
                >
                  {company.name}
                </div>
              );
            })}
          </Col>
          <div className="divButton">
            <Button variant="outline-danger" className="buttonNext" onClick={backStep}>
              Back
            </Button>
            <Button
              variant="outline-info"
              className="buttonNext"
              onClick={nextStep}
            >
              Next
            </Button>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Step2;
