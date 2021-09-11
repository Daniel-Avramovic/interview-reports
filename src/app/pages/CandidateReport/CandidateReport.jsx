import React, { useEffect, useState } from "react";
import { getCandidates } from "../../../services/getCandidates";

const CandidateReport = ({ match }) => {
  const id = parseInt(match.params.id);
  const token = sessionStorage.getItem("token");
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
    <main>
      <h1>{candidat.name}</h1>
    </main>
  );
};

export default CandidateReport;
