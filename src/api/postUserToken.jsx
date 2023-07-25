// Gerando um token pro usuario de acordo com seu cadastro

import React from 'react';

async function postUserToken(username, userpassword,) {
    const request = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: userpassword
        })
    })
}

export default postUserToken;