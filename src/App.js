import { Fragment, useEffect, useState } from "react";
import Footer from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/pages/home/Home";
import Login from "./app/pages/login/Login";
import { getToken } from "./services/login";

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
    const token = async ()=>{
      const data = await getToken(email, password)
      setToken(data.accessToken)
    }
    // const getToken = async (email, password) => {
    //   const response = await fetch("http://localhost:3333/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });
    //   //email: "dev@dev.com",
    //   //password: "developer",
    //   const data = await response.json();
    //   setToken(data.accessToken);
    // };
    token();
    setEmail('');
    setPassword('');
    e.preventDefault(); //probaj bez ovoga!!!
  };
  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);
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
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
