import React, { useEffect, useState } from "react";
import { formatDate } from "../../../Data/formatDate";
import { getCandidates } from "../../../services/getCandidates";
import "./candidateReport.css";

const CandidateReport = ({ match }) => {
  const id = parseInt(match.params.id);
  const token = sessionStorage.getItem("token");
  const img = "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  // const img =
  //   "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  const [candidat, setCandidat] = useState({});
  const onGetCandidates = () => {
    const get = async () => {
      const candidates = await getCandidates(token);
      candidates.forEach((candidat) => {
        if (candidat.id === id) {
          setCandidat(candidat);
        }
      });
    };
    get();
  };
  useEffect(onGetCandidates, [token, id]);
  return (
    <main className="container d-flex">
      <div className="d-flex">
      <div>
        <img src={img} alt="some pic" /> 
      </div>
      <div>
        <p>Name:</p>
        <p>{candidat.name}</p>
        <p>Email:</p>
        <p>{candidat.email}</p>
      </div>
      <div>
        <p>Date of birth:</p>        
        <p>{formatDate(candidat.birthday)}</p>
        {console.log(new Date(candidat.birthday))}
        <p>Education:</p>
        <p>{candidat.education}</p>
      </div>
      </div>

      <div>Tabela</div>
    </main>
  );
};

export default CandidateReport;
