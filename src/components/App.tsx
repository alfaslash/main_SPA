import React, { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Main } from './Main';
import '../styles/index.css';

export const App: FC = () => {
    return (
        <HashRouter>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path="page1" element={<Page1 />} />
                    <Route path="page2" element={<Page2 />} />
                    <Route path='/' element={<Main />} />
                </Routes>
            </main>
            <Footer />
        </HashRouter>
    );
}
