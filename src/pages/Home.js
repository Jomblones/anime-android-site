import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';


return (
    <div className="App">
        <Header />
        <div className="content-wrap">
            <Sidebar 
                topAnime={topAnime} />
            <MainContent
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                animeList={animeList} />
        </div>
        <Footer />
    </div>
);