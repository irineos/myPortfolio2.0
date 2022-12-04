import React, {useState} from 'react'

import './App.css';
import './index.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

function App() {

    const [page, setPage] = useState('home');

    const changePage = (pageName) => {
        setPage(pageName);
    }

    return (

        <main>
            <Profile />
            <div className="main-content">

                <Navbar page={page} changePage={changePage} />
                { page === 'home' ? <Home /> : <Portfolio /> }

            </div>
        </main>

    );
}

export default App;
