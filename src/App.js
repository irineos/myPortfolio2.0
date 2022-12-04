import React, {useState} from 'react'

import './App.css';
import './index.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';





function App() {

  const [page, setPage] = useState('about');

  const changePage = (pageName) => {
    setPage(pageName);
  }

  return (
    <main>
      <Profile />
      <div className="main-content">
        <Navbar page={page} changePage={changePage} />
        { page === 'about' ? <About /> : page === 'portfolio' ? <Portfolio /> : <Contact/> }
      </div>
    </main>
  );
}

export default App;
