import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import "./steps.css";

const Step3 = ({
  handleOnChange,
  backStep,
  postDate,
  error,
  viewAlert,
  candidate,
  company,
}) => {
  // const history = useHistory();
  return (
    <main>
      {viewAlert && <div className="alert">Successfully created report!!!</div>}
      <Container className="mt-3">
        <Row>
          <Col lg={3}>
            <div className="mb-4">
              <span>1</span>Select Candidate
            </div>
            <div className="mb-4">
              <span>2</span>Select Company
            </div>
            <div className="mb-4 currentStep">
              <span>3</span>Fill Report Detail
            </div>
            <div className="mt-5">
              <div>Candidate:</div>
              <div className="name">{candidate}</div>
            </div>
            <div>
              <div>Company:</div>
              <div className="name">{company}</div>
            </div>
          </Col>
          <Col lg={9}>
            <Row>
              <Col>
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="Date"
                  onChange={(e) => handleOnChange("date", e.target.value)}
                  className="inputStyle"
                />
              </Col>
              <Col>
                <label htmlFor="phase">Phase</label>
                <select
                  id="phase"
                  name="phase"
                  onChange={(e) => handleOnChange("phase", e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Cv">Cv</option>
                  <option value="Hr">Hr</option>
                  <option value="Teck">Teck</option>
                  <option value="Final">Finall</option>
                </select>
              </Col>
              <Col>
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  onChange={(e) => handleOnChange("status", e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Passed">Passed</option>
                  <option value="Declined">Declined</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  name="notes"
                  rows="6"
                  placeholder="Notes"
                  onChange={(e) => handleOnChange("notes", e.target.value)}
                />
              </Col>
            </Row>
          </Col>
          {<p className="errMsg">{error}</p>}
          <div className="divButton">
            <Button
              variant="outline-danger"
              className="buttonNext"
              onClick={backStep}
            >
              Back
            </Button>
            <Button
              variant="outline-info"
              className="buttonNext"
              onClick={() => {
                postDate();
              }} // history.push('/')
            >
              Finish
            </Button>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Step3;
