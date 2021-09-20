import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { getCandidates } from "../../../services/getCandidates";
import { getCompany } from "../../../services/getCompany";
import Loader from "../../components/loader/Loader";
import Step1 from "./createReportUI/Step1";
import Step2 from "./createReportUI/Step2";
import Step3 from "./createReportUI/Step3";

const CreateReport = () => {
  const token = sessionStorage.getItem("token");
  const [candidates, setCandidates] = useState([]);
  const [company, setCompany] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ value: "" });
  // const [value, setValue] = useState("");
  console.log(data, "podaci");

  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    setPage(page + 1);
  };

  const backStep = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const onGetCandidates = () => {
    const get = async () => {
      const onGetCandidates = await getCandidates(token);
      setCandidates(onGetCandidates);
      setLoading(false);
    };
    get();
  };

  const onGetCompany = () => {
    const get = async () => {
      const onGetCompany = await getCompany(token);
      setCompany(onGetCompany);
      setLoading(false);
    };
    get();
  };

  useEffect(onGetCandidates, [token]);
  useEffect(onGetCompany, [token]);

  return (
    <Fragment>
      {page === 1 &&
        (loading ? (
          <Loader />
        ) : (
          <Step1
            handleOnChange={handleOnChange}
            value={data.value}
            candidates={candidates}
            nextStep={nextStep}
          />
        ))}
      {page === 2 &&
        (loading ? (
          <Loader />
        ) : (
          <Step2
            handleOnChange={handleOnChange}
            value={data.company}
            companies={company}
            nextStep={nextStep}
            backStep={backStep}
          />
        ))}
      {page === 3 &&
        (loading ? (
          <Loader />
        ) : (
          <Step3 handleOnChange={handleOnChange} value={data.date} backStep={backStep} />
        ))}
    </Fragment>
  );
};

export default CreateReport;
