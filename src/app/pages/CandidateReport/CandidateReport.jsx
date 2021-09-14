import React, { Fragment, useEffect, useState } from "react";
import { getCandidates } from "../../../services/getCandidates";
import { getReports } from "../../../services/getReports";
import "./candidateReport.css";
import SingleCandidate from "./candidateReportsUI/SingleCandidate";

const CandidateReport = ({ match }) => {
  const id = parseInt(match.params.id);
  const token = sessionStorage.getItem("token");
  const [candidate, setCandidate] = useState({});
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const onGetCandidates = () => {
    const get = async () => {
      const candidates = await getCandidates(token);
      candidates.forEach((candidate) => {
        if (candidate.id === id) {
          setCandidate(candidate);
        }
      });
    };
    get();
  };
  const onGetReports = () => {
    const reports = async () => {
      let tempRepots = [];
      const allReports = await getReports(token);
      allReports.forEach((report) => {
        if (report.candidateId === id) {
          tempRepots.push(report);
        }
      });
      setReports(tempRepots);
      setLoading(false);
    };
    reports();
  };
  useEffect(onGetCandidates, [token, id]);
  useEffect(onGetReports, [token, id]);
  return (
    <Fragment>
      {loading ? <h1>Loading...</h1> : <SingleCandidate candidate={candidate} reports={reports} />}
    </Fragment>
  );
};

export default CandidateReport;
