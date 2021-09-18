import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { formatDate } from "../../../../Data/formatDate";
import Modalset from "../../../components/modal/Modal";
import SearchBar from "../../../components/searchBar/SearchBar";
import "./reportsUI.css";
import { faEye,  faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReportsUI = ({ reports }) => {
  const [modal,setModal] = useState(null);
  const close = () => {
      setModal(null);
  }
  return (
    <main>
        
      <Container>
          {modal && <Modalset closed={close} modalObj={modal} />}
        <SearchBar />
        <Table className="mt-5">
          <thead>
            <tr>
              <th>Company</th>
              <th>Candidate</th>
              <th>Interview date</th>
              <th>Status</th>
            </tr>
            {reports.map((report, index) => {
              return (
                <tr key={index}>
                  <th>{report.companyName}</th>
                  <th>{report.candidateName}</th>
                  <th>{formatDate(report.interviewDate)}</th>
                  <th>
                    {report.status} <div className="fRight">
                    <button className="styleReportButton" onClick={()=>{setModal(report);}} ><FontAwesomeIcon icon={faEye} /></button><button className="styleReportButton"><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </div>
                  </th>
                </tr>
              );
            })}
          </thead>
        </Table>
      </Container>
    </main>
  );
};

export default ReportsUI;
