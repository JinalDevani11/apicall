import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import Posts from './Posts';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Todos from './Todos';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="posts" element={<Posts/>} />
        <Route path="Comments" element={<Comments/>} />
        <Route path="Albums" element={<Albums/>} />
        <Route path="Photos" element={<Photos/>} />
        <Route path="Todos" element={<Todos/>} />
        <Route path="Users" element={<Users/>} />

      </Routes>
    </div>
  );
}

export default App;
