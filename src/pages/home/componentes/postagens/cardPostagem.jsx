function CardPostagem({img, acessos}){
    return(
        <picture>
            <img src={img} alt="" />
            <div className="img_hover">
                {acessos} 
                <img  src="./imagens/vizualizacao.png" alt="" />
            </div>
        </picture>
    )
}

export default CardPostagem;