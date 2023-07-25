import React from 'react';

// Para cadastrar um usuario na api
async function postUser(username, userpassword, useremail) {
    const request = await fetch('https://dogsapi.origamid.dev/json/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: userpassword,
            email: useremail,
        })
    })

    return request.ok
}

export default postUser;