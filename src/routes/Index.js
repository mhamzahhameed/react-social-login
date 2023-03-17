import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedIn from "../pages/LoggedIn";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { SIGNINROUTE,  LOGGEDINROUTE } from "./Route";

const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path={LOGGEDINROUTE} element={<LoggedIn />} />
        <Route path={SIGNINROUTE} element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Index;
