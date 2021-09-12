import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterUser } from "../../../Data/flteredUsers";
import { getCandidates } from "../../../services/getCandidates";
import SearchBar from "../../components/searchBar/SearchBar";
import "./home.css";

const Home = () => {
  const token = sessionStorage.getItem("token");
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  const [candidates, setCandidates] = useState([]);
  const [value, setValue] = useState("");
  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
    };
    get();
  };
  useEffect(onGetCandidates, [token]);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const filteredUsers = filterUser(candidates, value);
  console.log(filteredUsers)
  if (filteredUsers.length===0) {
    console.log(filteredUsers)
    return (
      <main className="container">
        <SearchBar val={value} search={onChange} />
        <h1>No resolts</h1>
      </main>
    );
  }
  return (
    <main className="container">
      <SearchBar val={value} search={onChange} />
      
      {filteredUsers.map((candidate, index) => {
        return (
          <Link to={`/candidateReport/${candidate.id}`} key={index}  className="row card2 cardsize">
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
          </Link>
        );
      })}
    </main>
  );
};

export default Home;
