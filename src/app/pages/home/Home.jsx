import React from "react";
import "./home.css";

const Home = () => {
  const img =
    "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif";
  const dummyCandidates = [
    { name: "first", email: "first@gmail.com" },
    { name: "second", email: "second@gmail.com" },
    { name: "third", email: "third@gmail.com" },
    { name: "third", email: "third@gmail.com" },
    { name: "third", email: "third@gmail.com" },
    { name: "third", email: "third@gmail.com" },
  ];
  return (
    <main className="container">
      {dummyCandidates.map((candidate) => {
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
