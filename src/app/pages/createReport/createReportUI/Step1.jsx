import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { filterUser } from "../../../../Data/flteredUsers";
import SearchBar from "../../../components/searchBar/SearchBar";
import "./steps.css";

const Step1 = ({ handleOnChange, value, candidates, nextStep, selected }) => {
  let history = useHistory();
  const filteredCandidates = filterUser(candidates, value);
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
    const addClass = (id) =>{
      let element = document.getElementById(id);
      let main = document.getElementsByClassName('active'); 
      Array.from(main).forEach((div)=>{
        div.firstChild.classList.remove('border');
      })
      element.classList.add('border')
    };
    
  return (
    <main>
      <Container className="mt-3">
        <Row>
          <Col lg={3}>
            <div className="mb-4 currentStep">
              <span>1</span>Select Candidate
            </div>
            <div className="mb-4">
              <span>2</span>Select Company
            </div>
            <div className="mb-4">
              <span>3</span>Fill Report Detail
            </div>
          </Col>
          <Col lg={9} className="leftBorder">
            <Row>
              <SearchBar
                value={value}
                search={(e) => handleOnChange("value", e.target.value)}
              />
              {filteredCandidates.map((candidate, index) => {
                return (
                  <Col lg={6} key={index} className='active'>
                    <div
                    id={candidate.id}
                      className="d-flex p-2 bgColor mb-3"
                      onClick={() =>{handleOnChange("candidate", candidate); addClass(candidate.id)}}
                    >
                      <img src={img} className="img" alt="No img!!!" />
                      <div>
                        <p className="m-1">{candidate.name}</p>
                        <p className="m-1">{candidate.email}</p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <div className="divButton">
            <Button
              variant="outline-danger"
              className="buttonNext"
              onClick={() => history.push("/")}
            >
              Cancel
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

export default Step1;
