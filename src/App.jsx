import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Model from "./component/model";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import List from "./pages/List";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Home />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
