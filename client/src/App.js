import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layout/header";
import FormCreate from "./layout/form-create";
import FormEdit from "./layout/form-edit";
import Details from "./layout/details";
import Home from "./layout/home";
import Footer from "./layout/footer";

function App() {
  const [error, setError] = useState(false);
  const [typeError, setTypeError] = useState("");

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route path="/form-create/">
            <FormCreate />
          </Route>
          <Route path="/form-edit/:id">
            <FormEdit
              error={error}
              setError={setError}
              typeError={typeError}
              setTypeError={setTypeError}
            />
          </Route>
          <Route path="/details/:id">
            <Details
              error={error}
              setError={setError}
              typeError={typeError}
              setTypeError={setTypeError}
            />
          </Route>
          <Route path="/">
            <Home
              error={error}
              setError={setError}
              typeError={typeError}
              setTypeError={setTypeError}
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
