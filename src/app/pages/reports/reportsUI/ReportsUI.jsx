import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import { formatDate } from "../../../../Data/formatDate";
import Modalset from "../../../components/modal/Modal";
import SearchBar from "../../../components/searchBar/SearchBar";
import "./reportsUI.css";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { filterReport } from "../../../../Data/filterReports";
import ModalConfirm from "../../../components/modalConfirm/ModalConfirm";
const ReportsUI = ({ reports, value, search, deleteOnClick,viewAlert }) => {
  const filteredReports = filterReport(reports, value);
  const [modal,setModal] = useState(null);
   const [id, setId] = useState("");
   const [viewConfirmDelete, setViewConfirmDelete] = useState(false);
  const close = () => {
    setModal(null);
  };
  const closeModal = () => {
    setViewConfirmDelete(false);
  }
  return (
    <main>
      <Container>

          {modal && <Modalset closed={close} modalObj={modal} />}
          {viewConfirmDelete && <ModalConfirm closeModal={closeModal} id={id} />}
        {viewAlert && <div className="alert">Deleted Successfully!!!</div>}
        {modal && <Modalset closed={close} modalObj={modal} />}
        <SearchBar value={value} search={search} />
        <Table className="mt-5">
          <thead>
            <tr>
              <th>Company</th>
              <th>Candidate</th>
              <th>Interview date</th>
              <th>Status</th>
            </tr>
            {filteredReports.map((report, index) => {
              return (
                 
                  <tr key={index}>
                  <th>{report.companyName}</th>
                  <th>{report.candidateName}</th>
                  <th>{formatDate(report.interviewDate)}</th>
                  <th>

                    {report.status} <div className="fRight">
                    <button className="styleReportButton" onClick={()=>{setModal(report);}} ><FontAwesomeIcon icon={faEye} /></button>
                    <button className="styleReportButton" onClick={()=>{setId(report.id); setViewConfirmDelete(true)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    {/* {report.status}
                   <div className="fRight">
                     <button
                        className="styleReportButton"
                        onClick={() => {
                          setModal(report);
                        }}
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                      <button
                        className="styleReportButton"
                        onClick={() => {deleteOnClick(report.id)}}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button> */}
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
