import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { filterCompany } from "../../../../Data/filterCompany";
import SearchBar from "../../../components/searchBar/SearchBar";
import "./steps.css";

const Step2 = ({
  handleOnChange,
  nextStep,
  backStep,
  companies,
  value,
  selected,
  candidate
}) => {
  const filteredCompany = filterCompany(companies, value);
  const active = document.getElementsByClassName("listCompany");
  const addClass = (id) => {
    const companyId = document.getElementById(id);
    Array.from(active).forEach(element => {
      element.classList.remove("border");
    })
    companyId.classList.add("border");
  };
  return (
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
            <div className='mt-5'>
              <div>Candidate:</div>
            <div className='name'>{candidate}</div>
            </div>
          </Col>
          <Col lg={9}>
            <SearchBar
              value={value}
              search={(e) => handleOnChange("valueCompany", e.target.value)}
            />
            {filteredCompany.map((company, index) => {
              return (
                <div
                  id={company.id}
                  key={index}
                  className="listCompany"
                  onClick={() => {
                    handleOnChange("company", company);
                    addClass(company.id);
                  }}
                >
                  {company.name}
                </div>
              );
            })}
          </Col>
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
              onClick={nextStep}
              disabled={!selected}
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
