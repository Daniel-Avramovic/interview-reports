import { Fragment, useState } from "react";
import Footer from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/pages/home/Home";
import Login from "./app/pages/login/Login";
import { getToken } from "./services/login";
import CandidateReport from "./app/pages/CandidateReport/CandidateReport.jsx";
import { Route, Switch, useHistory } from "react-router-dom";

const App = () => {
  let history = useHistory();
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
      history.push("/");

    };
    token();
    setEmail("");
    setPassword("");
    e.preventDefault(); //probaj bez ovoga!!!
  };
  
  const logOut = () => {
    sessionStorage.removeItem("token");
    history.push('/login')
  };

  if (!token || token === "undefined") {
    history.push('/login');
  }

  return (
      <Fragment>
        <Header logOut={logOut} />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/candidateReport/:id"} component={CandidateReport} />
          <Route exact path="/login">
            <Login
              submit={submit}
              email={email}
              password={password}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
            />
          </Route>
        </Switch>

        <Footer />
      </Fragment>
  );
};

export default App;
