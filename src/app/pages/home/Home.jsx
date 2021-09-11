import React, { useState, useEffect } from "react";
import { getCandidates } from "../../../services/getCandidates";
import "./home.css";

const Home = () => {
  const token = sessionStorage.getItem("token");
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  const [candidates, setCandidates] = useState([]);
  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
    };
    get();
  };
  useEffect(onGetCandidates, [token]);

  return (
    <main className="container">
      {candidates.map((candidate) => {
        return (
          <div className="row card2 cardsize">
            <div className="col s10 m10">
              <div className="card">
                <div className="card-image imageavatar ">
                  <img src={img} alt="No img"></img>
                </div>
                <span className="card-title name">{candidate.name}</span>
                <span className="card-email email">{candidate.email}</span>
                <div className="card-content"></div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
