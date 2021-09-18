import React, { Fragment, useEffect, useState } from "react";
import { getReports } from "../../../services/getReports";
import Loader from "../../components/loader/Loader";
import ReportsUI from "./reportsUI/ReportsUI";

const Reports = () => {
  const token = sessionStorage.getItem("token");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const onGetReports = () => {
    const get = async () => {
      const allReports = await getReports(token);
    //   console.log(allReports);
      setReports(allReports);
      setLoading(false);
    };
    get();
  };
  useEffect(onGetReports, [token]);
  return(
      <Fragment>
          {loading ? <Loader /> : <ReportsUI reports={reports} />}
      </Fragment>
  );
};

export default Reports;
