import React from 'react';
import ErrorImg from '../assets/error.png';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className='flex flex-col h-screen w-full  justify-center items-center'>
            <img className='h-100 w-auto ' src={ErrorImg} alt="" />
            <p className='text-[#202046] font-extrabold text-4xl'>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;