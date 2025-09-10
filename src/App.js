import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login/Login';
import AllocationSite from './Allocation/AllocationSite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allocation" element={<AllocationSite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
