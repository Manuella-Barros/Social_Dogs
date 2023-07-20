import React from 'react';

async function getUserToken(userName, userPassword) {
    const request = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            username: userName, 
            password: userPassword
        })
    }).then(res => res.json());

    return request;
}

export default getUserToken;