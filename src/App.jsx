import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Table from "./components/DataTable";
import EditStudent from "./components/EditStudent";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/editstudent/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
};

export default App;
