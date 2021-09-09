import { Fragment } from "react";
import Footer from "./app/components/footer/Footer";
import Header from "./app/components/header/Header";
import Home from "./app/pages/home/Home";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;
