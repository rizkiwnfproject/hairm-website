import React from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './Component/ScrollToTop';
import MainLayout from "./Layouts/main.layout";
import MainHome from "./Layouts/main.home";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <MainLayout>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={MainHome} />
            </Switch>
          </ScrollToTop>
        </MainLayout>
      </Router>
    </React.StrictMode>
  );
}

export default App;
