import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {
                    NavigationActivation.state === "loading" ? <p>Loading.....</p> : <Outlet></Outlet>
                }
            </main>
            <Footer />
        </div>
    );
};

export default Home;
