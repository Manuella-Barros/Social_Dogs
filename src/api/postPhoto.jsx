import React from 'react';

function postPhoto(img, nome, peso, idade) {
    const token = localStorage.getItem('tokenUsuario');
    const form = new FormData();
    form.append('img', img);
    form.append('nome', nome);
    form.append('peso', peso);
    form.append('idade', idade);

    
    // Display the key/value pairs
    for (var pair of form.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

    const request = fetch('https://dogsapi.origamid.dev/json/api/photo', {
        method: 'POST', 
        headers: {
            Authorization: 'Bearer ' + token
        },
        body: form
    }).then(res => console.log(res))
}

export default postPhoto;