import React from 'react';
import WelcomeNavbar from '../components/WelcomeNavbar';

const NotFound = () => {
    return (
        <>
        <header>
            <WelcomeNavbar />
        </header>
        <div className="flex flex-col w-full mx-auto my-auto justify-center items-center h-full">
            <h1 className="text-3xl dark:text-neutral-300">404</h1>
            <h2 className="dark:text-neutral-400">Page Not Found</h2>
        </div>
        </>
    );
}

export default NotFound;