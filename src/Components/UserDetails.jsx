import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const userDetails = useLoaderData();

    const { name, website } = userDetails;

    return (
        <div>
            <h1>{name}</h1>
            <h1>{website}</h1>
            <h1>
                Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
            </h1>

        </div>
    );
};

export default UserDetails;