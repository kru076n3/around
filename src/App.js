import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Newbie from './pages/Newbie';
import Beginner from './pages/Beginner';
import Senior from './pages/Senior';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/newbie">Newbie</Link> | <Link to="/beginner">Beginner</Link> | <Link to="/senior">Senior</Link>
      </nav>
      <Routes>
        <Route path="/newbie" element={<Newbie />}/>
        <Route path="/beginner" element={<Beginner />}/>
        <Route path="/senior" element={<Senior />}/>
      </Routes>
    </div>
  );
}

export default App;
