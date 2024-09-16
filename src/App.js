import React, {useState} from 'react'
import ReactGA from 'react-ga4';
import dotenv from 'dotenv'

import './App.css';
import './index.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';

dotenv.config();

function App() {

    ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

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
