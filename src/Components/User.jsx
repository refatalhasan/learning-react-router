import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {

    const { name, id, username, email, phone } = user
    return (
        <div className='bg-sky-600 p-5 rounded-xl flex flex-col text-[#dfdfdf]'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p className='lowercase'>@{username}</p>
            </div>
            <div className='mt-5 '>
                <p>ID: {id}</p>
                <p>E-mail: {email}</p>
                <p>Phone: {phone}</p>
                <Link to={`/user/${id}`}>Show details</Link>
                <Link to={`/user/${id}`}>Show details</Link>
            </div>
        </div>
    );
};

export default User;