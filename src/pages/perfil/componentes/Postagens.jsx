import React from 'react';

function Postagens() {
    return (
        <section className='conteudo_perfil'>
            <h1>Poste sua foto</h1>

            <form>
                <p>Nome </p>
                <input type="text" name="" id="" />
                <p>Peso </p>
                <input type="text" name="" id="" />
                <p>Idade </p>
                <input type="text" name="" id="" /><br />
                <input type="file" name="" id="" /><br />
                <button className='botao'>Enviar</button>
            </form>
        </section>
    );
}

export default Postagens;