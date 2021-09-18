import React, { Fragment, useEffect, useState } from "react";
import { getReports } from "../../../services/getReports";
import Loader from "../../components/loader/Loader";
import ReportsUI from "./reportsUI/ReportsUI";

const Reports = () => {
  const token = sessionStorage.getItem("token");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
 
  async function getData() {
    let data = await getReports(token);
    if(data) {
      setReports(data);
      setLoading(false);
    }
  }
  useEffect(()=>{getData()});
  return(
      <Fragment>
          {loading ? <Loader /> : <ReportsUI reports={reports} />}
      </Fragment>
  );
};

export default Reports;
