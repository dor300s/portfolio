import React from 'react';
import { Welcome } from '../components/Welcome';
import { Specialities } from '../components/Specialities';
import { Portfolio } from '../components/Portfolio';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Dots } from '../components/Dots';


export const Main = ({ currentPage }) => {

    return (
        <div className="main-page-container">
            <Dots currentPage={currentPage} />
            <Welcome currentPage={currentPage} />
            <Specialities currentPage={currentPage} />
            <Portfolio currentPage={currentPage} />
            <About currentPage={currentPage} />
            <Contact currentPage={currentPage} />
        </div>
    )
}