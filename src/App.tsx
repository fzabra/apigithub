import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import DetailPage from './Pages/DetailPage/DetailPage';

const App = () => {

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/DetailPage/:owner/:repoName" element={<DetailPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;

