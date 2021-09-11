import { Fragment, useState } from "react";
import Footer from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/pages/home/Home";
import Login from "./app/pages/login/Login";
import { getToken } from "./services/login";
import CandidateReport from "./app/pages/CandidateReport/CandidateReport.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    const token = async () => {
      const data = await getToken(email, password);
      sessionStorage.setItem("token", data.accessToken);
      setToken(data.accessToken);
    };
    token();
    setEmail("");
    setPassword("");
    e.preventDefault(); //probaj bez ovoga!!!
  };

  if (!token || token === "undefined") {
    return (
      <Fragment>
        <Login
          submit={submit}
          email={email}
          password={password}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
        />
      </Fragment>
    );
  }
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/candidateReport/:id"} component={CandidateReport} />
        </Switch>

        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
