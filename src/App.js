
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
