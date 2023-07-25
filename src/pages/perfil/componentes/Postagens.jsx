import React, { useState } from 'react';
import postPhoto from '../../../api/postPhoto';

function Postagens() {
    const [infoImg, setInfoImg] = useState({
        img: '', 
        nome: '', 
        peso: '', 
        idade: ''
    });

    function addInfo({target}){
        setInfoImg(prevValue => { 
            if(target.type == 'file'){
                return {...prevValue, [target.id]: target.files[0]};
            } else{
                return {...prevValue, [target.id]: target.value};
            }
        });
    }

    function enviaImg(e){
        e.preventDefault();
        postPhoto(infoImg.img, infoImg.nome, infoImg.peso, infoImg.idade);
    }

    return (
        <section className='conteudo_perfil'>
            <h1>Poste sua foto</h1>

            <form>
                <p>Nome </p>
                    <input onChange={addInfo} type="text" name="" id="nome" />
                <p>Peso </p>
                    <input onChange={addInfo} type="text" name="" id="peso" />
                <p>Idade </p>
                    <input onChange={addInfo} type="text" name="" id="idade" /><br />
                <input onChange={addInfo} type="file" name="" id="img" /><br />
                
                {/* Esse URL.createObjectURL cria um url temporario para essa foto */}
                {infoImg.img && <img src={URL.createObjectURL(infoImg.img)}/>}
                <button onClick={enviaImg} className='botao'>Enviar</button>
            </form>
        </section>
    );
}

export default Postagens;