import React from 'react';

async function getPosts() {
    const request = await fetch('https://dogsapi.origamid.dev/json/api/photo?_total=6&_page=1&_user=0')
        .then(res => res.json()) //.json() pega uma promessa em formato json e transforma em objeto pra ser utilizado no javascript
    
    return request;
}

export default getPosts;