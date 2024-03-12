import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./Main";
import Topbutton from "./pages/components/Topbuttons/Topbuttons";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
          {/* <Route index element={<Topbutton />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
