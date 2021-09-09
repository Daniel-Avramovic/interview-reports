import { Fragment } from "react";
import Footer from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/pages/home/Home";
import CandidateReport from "./app/pages/CandidateReport/CandidateReport.jsx";
import{BrowserRouter, Route,Switch} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/candidateReport"} component={CandidateReport} />
      
        </Switch>
     
      <Footer />
    </Fragment>
    </BrowserRouter>
  );
};

export default App;
